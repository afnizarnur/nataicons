const fs = require("fs").promises
const path = require("path")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))

// Component template remains unchanged
const componentTemplate = (name, svg20, svg24) => `
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: '${name}Icon', 
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props, { attrs }) {
    const getSize = computed(() => props.size.slice(-1) === 'x' 
      ? props.size.slice(0, props.size.length - 1) + 'em'
      : \`\${parseInt(props.size)}px\`)

    const svg20 = ${svg20}
    const svg24 = ${svg24}

    const updateSvg = (svgString) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(svgString, 'image/svg+xml')
      const svg = doc.documentElement

      svg.setAttribute('width', getSize.value)
      svg.setAttribute('height', getSize.value)

      svg.querySelectorAll('[fill]:not([fill="none"])').forEach(el => {
        el.setAttribute('fill', props.color)
      })
      svg.querySelectorAll('[stroke]:not([stroke="none"])').forEach(el => {
        el.setAttribute('stroke', props.color)
      })

      return svg.outerHTML
    }

    return () => h('div', {
      ...attrs,
      innerHTML: updateSvg(props.size === '20' ? svg20 : svg24),
      style: {
        display: 'inline-block',
        width: getSize.value,
        height: getSize.value,
      }
    })
  }
})
`

// Move the index template to a separate function
const generateIndexContent = (components) => {
  const imports = components
    .map((comp) => `import ${comp}Icon from './${comp}Icon.js'`)
    .join("\n")

  const exports = components.map((comp) => `${comp}Icon`).join(",\n  ")

  const iconComponents = components
    .map((comp) => `${comp.toLowerCase()}: ${comp}Icon`)
    .join(",\n      ")

  return `
import { defineComponent, h } from 'vue'
${imports}

export {
  ${exports}
}

export const NataIcon = defineComponent({
  name: 'NataIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: String,
    color: String
  },
  setup(props) {
    const IconComponent = {
      ${iconComponents}
    }[props.name.toLowerCase()]
    
    return () => IconComponent 
      ? h(IconComponent, { size: props.size, color: props.color })
      : null
  }
})
`
}

// Existing helper functions
const processSvgFile = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8")
  return JSON.stringify(content.trim().replace(/\n/g, " "))
}

const buildIconComponent = async (name, outputPath) => {
  const svg20Path = path.join(__dirname, "..", "icons", "20x20", `${name}.svg`)
  const svg24Path = path.join(__dirname, "..", "icons", "24x24", `${name}.svg`)

  const [svg20Content, svg24Content] = await Promise.all([
    processSvgFile(svg20Path).catch(() => '""'),
    processSvgFile(svg24Path),
  ])

  const componentName = camelcase(name, { pascalCase: true })
  const componentContent = componentTemplate(
    componentName,
    svg20Content,
    svg24Content
  )
  await fs.writeFile(
    path.join(outputPath, `${componentName}Icon.js`),
    componentContent
  )
  return componentName
}

// Main build function
const buildVueComponents = async () => {
  console.log("Building Vue icon components...")

  try {
    const vuePackagePath = path.join(__dirname, "..", "vue")
    await rimraf(path.join(vuePackagePath, "*"))
    await fs.mkdir(vuePackagePath, { recursive: true })

    const icons24 = await fs.readdir(
      path.join(__dirname, "..", "icons", "24x24")
    )
    const componentNames = []

    for (const file of icons24) {
      const name = file.replace(".svg", "")
      const componentName = await buildIconComponent(name, vuePackagePath)
      componentNames.push(componentName)
    }

    const indexContent = generateIndexContent(componentNames)
    await fs.writeFile(path.join(vuePackagePath, "index.js"), indexContent)

    const packageJson = {
      name: "@nataicons/vue",
      version: "1.0.0",
      description: "Vue components for Nata Icons",
      main: "index.js",
      module: "index.esm.js",
      files: ["*.js", "!*.test.js", "!*.spec.js", "LICENSE", "README.md"],
      peerDependencies: {
        vue: "^3.0.0",
      },
      repository: {
        type: "git",
        url: "https://github.com/yourusername/nataicons.git",
        directory: "vue",
      },
      publishConfig: {
        access: "public",
      },
      keywords: ["vue", "icons", "svg", "inline", "nata", "nataicons"],
      license: "MIT",
    }

    await fs.writeFile(
      path.join(vuePackagePath, "package.json"),
      JSON.stringify(packageJson, null, 2)
    )

    await fs.copyFile(
      path.join(__dirname, "..", "LICENSE"),
      path.join(vuePackagePath, "LICENSE")
    )

    console.log("Vue components built successfully")
  } catch (error) {
    console.error("Error building Vue components:", error)
  }
}

buildVueComponents().catch(console.error)
