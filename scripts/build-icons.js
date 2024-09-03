const { getFigmaAssets } = require("figma-assets-generator")

const get24px = {
  personalAccessToken: process.env.FIGMA_TOKEN,
  fileId: "N4TZ7vR8BUDHmlgHMmpp9Q",
  documentId: "0:1",
  fileExtension: "svg",
  output: "icons/24x24",
}

const get20px = {
  personalAccessToken: process.env.FIGMA_TOKEN,
  fileId: "N4TZ7vR8BUDHmlgHMmpp9Q",
  documentId: "1126:2",
  fileExtension: "svg",
  output: "icons/20x20",
}

async function main() {
  console.log("Get icon 24x24...")
  await getFigmaAssets(get24px)

  console.log("\nGet icon 20x20...")
  await getFigmaAssets(get20px)
}

main().catch((err) => {
  console.error(err)
})
