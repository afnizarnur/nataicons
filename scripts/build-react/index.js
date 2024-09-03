const fs = require("fs").promises
const path = require("path")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))
const dedent = require("dedent")
const pkg = require("../../package.json")

const componentTemplate = (name, svg20, svg24) =>
  `
import React from 'react';

const ${name}Icon = ({ size = '24', color = 'currentColor', ...props }) => {
  const getSize = () => {
    if (typeof size === 'string' && size.slice(-1) === 'x') 
      return size.slice(0, size.length - 1) + 'em';
    return typeof size === 'number' ? size + 'px' : size;
  };

  const updateSvg = (svgString) => {
    return svgString
      .replace(/width="\\d+"/, 'width="' + getSize() + '"')
      .replace(/height="\\d+"/, 'height="' + getSize() + '"')
      .replace(/fill="([^"]+)"/g, 'fill="' + color + '"')
      .replace(/stroke="([^"]+)"/g, 'stroke="' + color + '"');
  };

  const svg20 = ${JSON.stringify(svg20)};
  const svg24 = ${JSON.stringify(svg24)};

  const svgContent = size === '20' || size === 20 ? updateSvg(svg20) : updateSvg(svg24);

  return React.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    dangerouslySetInnerHTML: { __html: svgContent },
    width: getSize(),
    height: getSize(),
    ...props
  });
};

export default ${name}Icon;
`.trim()

const indexTemplate = (components) =>
  `
import React from 'react';
${components
  .map((comp) => `import ${comp}Icon from './${comp}Icon';`)
  .join("\n")}

export {
  ${components.map((comp) => `${comp}Icon`).join(",\n  ")}
};

export const NataIcon = ({ name, ...props }) => {
  const IconComponent = {
    ${components
      .map((comp) => `${comp.toLowerCase()}: ${comp}Icon`)
      .join(",\n    ")}
  }[name.toLowerCase()];
  
  return IconComponent ? React.createElement(IconComponent, props) : null;
};
`.trim()

const packageJSONTemplate = () =>
  `
{
  "name": "nataicons-react",
  "version": "${pkg.version}",
  "main": "index.js",
  "license": "${pkg.license}",
  "homepage": "${pkg.homepage}",
  "description": "${pkg.description}",
  "keywords": ${JSON.stringify(pkg.keywords)},
  "repository": ${JSON.stringify(pkg.repository)},
  "author": "${pkg.author}",
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
`.trim()

async function processSvgFile(filePath) {
  const content = await fs.readFile(filePath, "utf8")
  return content.trim().replace(/\n/g, " ")
}

async function buildReactComponents() {
  console.log("Building React icon components...")

  try {
    await rimraf("./react/*")
    await fs.mkdir("./react", { recursive: true })

    const icons24 = await fs.readdir(
      path.join(__dirname, "..", "..", "icons", "24x24")
    )
    const components = []

    for (const file of icons24) {
      const baseName = path.basename(file, ".svg")
      const componentName = camelcase(baseName, { pascalCase: true })

      const svg20Path = path.join(__dirname, "..", "..", "icons", "20x20", file)
      const svg24Path = path.join(__dirname, "..", "..", "icons", "24x24", file)

      const [svg20Content, svg24Content] = await Promise.all([
        processSvgFile(svg20Path).catch(() => ""),
        processSvgFile(svg24Path),
      ])

      const component = componentTemplate(
        componentName,
        svg20Content,
        svg24Content
      )
      await fs.writeFile(`./react/${componentName}Icon.js`, dedent(component))
      components.push(componentName)
    }

    const indexContent = indexTemplate(components)
    await fs.writeFile("./react/index.js", dedent(indexContent))

    await fs.writeFile("./react/package.json", packageJSONTemplate())
    await fs.copyFile("./README.md", "./react/README.md")

    console.log("Finished building React components.\n")
  } catch (error) {
    console.error("Error building React components:", error)
  }
}

buildReactComponents().catch(console.error)
