const fs = require("fs").promises
const dedent = require("dedent")
const camelcase = require("camelcase")
const { promisify } = require("util")
const rimraf = promisify(require("rimraf"))
const { compile } = require("@vue/compiler-dom")

function svgToVue(svg) {
  return compile(svg, {
    mode: "module",
  }).code
}

console.log("Building Vue components...")

rimraf("./components/vue/*")
  .then(() => {
    return Promise.all([
      fs.readdir("./icons").then((files) => {
        return Promise.all(
          files.map((file) => {
            return fs
              .readFile(`./icons/${file}`, "utf8")
              .then((content) => {
                return svgToVue(content)
              })
              .then((component) => {
                const fileName = `${camelcase(file.replace(/\.svg$/, ""), {
                  pascalCase: true,
                })}.js`
                const content = dedent(component).replace(
                  "export function",
                  "export default function"
                )
                return fs
                  .writeFile(`./components/vue/${fileName}`, content)
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

          return fs.writeFile("./components/vue/index.js", exportStatements)
        })
      }),
    ])
  })
  .then(() => console.log("Finished building Vue components."))
