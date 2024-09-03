const fs = require("fs").promises
const path = require("path")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))
const dedent = require("dedent")
const pkg = require("../../package.json")

const componentTemplate = (name, svg, size) => {
  const svgContent = svg
    .replace(/<svg([^>]+)>/, (match, attributes) => {
      return `<svg${attributes} width={size} height={size} {...props}>`
    })
    .replace(/\s*xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/g, "")
    .replace(/\s*xmlnsXlink=["']http:\/\/www\.w3\.org\/1999\/xlink["']/g, "")
    .replace(/\n+/g, " ")
    .replace(/>\s+</g, "><")
    .trim()

  return `
import React from 'react';

function ${name}({ size = '${size}', ...props }) {
  return (
    <svg 
      width={size}
      height={size}
      viewBox="0 0 ${size} ${size}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${svgContent}
    </svg>
  );
}

export default ${name};
`.trim()
}

const wrapperTemplate = (name) => `
import * as React from 'react';
import { ${name}2020, ${name}2424 } from './index';

const ${name} = ({ size, ...props }) => {
  const IconComponent = size === '20' ? ${name}2020 : ${name}2424;
  return <IconComponent size={size} {...props} />;
};

export default ${name};
`

const indexTemplate = (components) =>
  `
${components.map((comp) => `import ${comp} from './${comp}.jsx';`).join("\n")}

export {
  ${components.join(",\n  ")}
};

export const Icon = ({ name, ...props }) => {
  const IconComponent = {
    ${components
      .map((comp) => `${comp.toLowerCase()}: ${comp}`)
      .join(",\n    ")}
  }[name.toLowerCase()];
  
  return IconComponent ? <IconComponent {...props} /> : null;
};
`.trim()

const packageJSONTemplate = () =>
  `
{
  "name": "nataicons-react",
  "version": "${pkg.version}",
  "main": "lib/index.js",
  "module": "es/index.js",
  "jsnext:main": "es/index.js",
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

async function buildReactComponents() {
  console.log("Building React icon components...")

  try {
    await rimraf("./react/*")
    await fs.mkdir("./react", { recursive: true })

    const sizes = ["20x20", "24x24"]
    const components = []

    for (const size of sizes) {
      const iconDir = `./icons/${size}`
      const files = await fs.readdir(iconDir)

      for (const file of files) {
        const content = await fs.readFile(path.join(iconDir, file), "utf8")
        const componentName = `${camelcase(file.replace(/\.svg$/, ""), {
          pascalCase: true,
        })}${size.replace("x", "")}`
        const component = componentTemplate(
          componentName,
          content,
          size.split("x")[0]
        )

        await fs.writeFile(`./react/${componentName}.jsx`, dedent(component))
        components.push(componentName)
      }
    }

    const indexContent = indexTemplate(components)
    await fs.writeFile("./react/index.jsx", dedent(indexContent))

    await fs.writeFile("./react/package.json", packageJSONTemplate())
    await fs.copyFile("./README.md", "./react/README.md")

    console.log("Finished building React components.\n")
  } catch (error) {
    console.error("Error building React components:", error)
  }
}

buildReactComponents().catch(console.error)
