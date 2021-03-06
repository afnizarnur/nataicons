const fs = require("fs").promises
const dedent = require("dedent")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))

const componentTemplate = (name, svg) =>
  `
export default {
  name: '${name}',
  
  props: {
    size: {
      type: String,
      default: '20',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },
  functional: true,
  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return ${svg.replace(/<svg([^>]+)>/, "<svg$1 {...ctx.data}>")}
  }
}
`.trim()

console.log("Building Vue 20x20 icon components...")

rimraf("./vue/*")
  .then(() => {
    return Promise.all([
      fs.readdir("./icons/20x20").then((files) => {
        return Promise.all(
          files.map((file) => {
            return fs
              .readFile(`./icons/20x20/${file}`, "utf8")
              .then((content) => {
                return componentTemplate(
                  `${camelcase(file.replace(/\.svg$/, ""), {
                    pascalCase: true,
                  })}20.js`,
                  content
                )
              })
              .then((component) => {
                const fileName = `${camelcase(file.replace(/\.svg$/, ""), {
                  pascalCase: true,
                })}20.js`
                const content = dedent(component).replace(
                  "export function",
                  "export default function"
                )
                return fs
                  .writeFile(`./vue/${fileName}`, content)
                  .then(() => fileName)
              })
          })
        ).then((fileNames) => {
          const exportStatements = fileNames
            .map((fileName) => {
              const componentName = fileName.replace(/\.js$/, "")
              return `export { default as ${componentName} } from './${fileName}'`
            })
            .join("\n")

          return fs.writeFile("./vue/index.js", exportStatements)
        })
      }),
    ])
  })
  .then(() => console.log("Finished building Vue components.\n"))
