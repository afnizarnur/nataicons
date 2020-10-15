const path = require("path")
const fs = require("fs-extra")
const pkg = require("../../package.json")

const packageJSONTemplate = (name) =>
  `{
  "name": "nataicons/${name}",
  "version": "${pkg.version}",
  "main": "vue/lib/index.cjs.js",
  "module": "vue/lib/index.es.js",
  "jsnext:main": "vue/lib/index.es.js",
  "license": "${pkg.license}",
  "homepage": "${pkg.homepage}",
  "description": "${pkg.description}",
  "keywords": ${JSON.stringify(pkg.keywords)},
  "repository": ${JSON.stringify(pkg.repository)},
  "author": "${pkg.author}",
}
`.trim()

async function main() {
  const packagePath = `./packages/vue`

  const indexJSPath = path.join(__dirname, packagePath, "index.js")
  
  if (await fs.exists(indexJSPath)) {
    await fs.appendFile(indexJSPath, indexJSContent, "utf8"),
      function (err, result) {
        if (err) console.log("error", err)
      }
  } else {
    await fs.writeFile(indexJSPath, indexJSContent, "utf8"),
      function (err, result) {
        if (err) console.log("error", err)
      }
  


  await fs.writeFile(
    path.join(__dirname, `./packages/vue/package.json`),
    packageJSONTemplate("vue"),
    function (err, result) {
      if (err) console.log("error", err)
    }
  )

  await fs.copyFile(
    path.join(__dirname, `../../README.md`),
    path.join(__dirname, `./packages/vue/README.md`),
    function (err, result) {
      if (err) console.log("error", err)
    }
  )
}

main().catch((err) => {
  console.error(err)
})
