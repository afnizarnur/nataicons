const pkg = require("../../package.json")
const path = require("path")
const fs = require("fs").promises

const packageJSONTemplate = (name) =>
  `{
"name": "nataicons/${name}",
"version": "${pkg.version}",
"main": "packages/vue/lib/index.cjs.js",
"module": "packages/vue/lib/index.es.js",
"jsnext:main": "packages/vue/lib/index.es.js",
"license": "${pkg.license}",
"homepage": "${pkg.homepage}",
"description": "${pkg.description}",
"keywords": ${JSON.stringify(pkg.keywords)},
"repository": ${JSON.stringify(pkg.repository)},
"author": "${pkg.author}"
}
`.trim()

console.log("\nCreating package.json and README.md...")

return Promise.all([
  fs
    .writeFile(`./packages/vue/package.json`, packageJSONTemplate("vue"))
    .then(() => {
      fs.copyFile("./README.md", `./packages/vue/README.md`)
    }),
]).then(() => console.log("Finished creating package.json and README.md."))
