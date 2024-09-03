const fs = require("fs").promises
const path = require("path")
const camelcase = require("camelcase")

const componentTemplate = (name, svg20, svg24) => `
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  name: '${name}Icon',  // Added 'Icon' suffix to make it multi-word
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

      // Update color for elements with fill or stroke
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

const indexTemplate = (components) => `
import { defineComponent, h } from 'vue'
${components
  .map((comp) => `import ${comp}Icon from './${comp}Icon.js'`)
  .join("\n")}

export {
  ${components.map((comp) => `${comp}Icon`).join(",\n  ")}
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
      ${components
        .map((comp) => `${comp.toLowerCase()}: ${comp}Icon`)
        .join(",\n      ")}
    }[props.name.toLowerCase()]
    
    return () => IconComponent 
      ? h(IconComponent, { size: props.size, color: props.color })
      : null
  }
})
`

const processSvgFile = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8")
  return JSON.stringify(content.trim().replace(/\n/g, " "))
}

const buildIconComponent = async (name) => {
  const svg20Path = path.join(
    __dirname,
    "..",
    "..",
    "icons",
    "20x20",
    `${name}.svg`
  )
  const svg24Path = path.join(
    __dirname,
    "..",
    "..",
    "icons",
    "24x24",
    `${name}.svg`
  )

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
    path.join(__dirname, "..", "..", "vue", `${componentName}Icon.js`),
    componentContent
  )
  return componentName
}

const buildVueComponents = async () => {
  const icons24 = await fs.readdir(
    path.join(__dirname, "..", "..", "icons", "24x24")
  )
  const componentNames = await Promise.all(
    icons24.map((file) => buildIconComponent(file.replace(".svg", "")))
  )

  const indexContent = indexTemplate(componentNames)
  await fs.writeFile(
    path.join(__dirname, "..", "..", "vue", "index.js"),
    indexContent
  )

  console.log("Vue components built successfully")
}

buildVueComponents().catch(console.error)
