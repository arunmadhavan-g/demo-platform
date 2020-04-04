const axios = require("axios")
const unified = require("unified")
const parse = require("remark-parse")
const remark2Html = require("remark-html")

const getInfoJson = ({ title, publishedOn, author, tags, description }) => ({
  title,
  publishedOn,
  author,
  tags,
  description,
})

const buildPageURL = ({ repo, file }) => `https://raw.githubusercontent.com/${repo}/master/${file}`

const getReadMeContent = async page => (await axios.get(buildPageURL(page))).data

async function dataNode(createNodeId, node, page, createContentDigest) {

  const rawcontent = await getReadMeContent(page)

  const content = unified()
    .use(parse)
    .use(remark2Html)
    .processSync(rawcontent).contents

  let data = {
    id: createNodeId(`${page.title}>> MultiGitSource`),
    children: [],
    internal: {
      type: `MultiGitSource`,
    },
    pageInfo: {
      ...getInfoJson(page),
      rawContent: rawcontent,
      content: content,
      pagePath: page.repo,
    },
  }

  data.internal.contentDigest = createContentDigest(data)

  return data
}

exports.sourceNodes = async ({ node, actions, createNodeId, createContentDigest }, pluginOptions) => {
  const { createNode } = actions

  let data = await Promise.all(
    pluginOptions.pages.map(async page => await dataNode(createNodeId, node, page, createContentDigest)),
  )

  data.forEach(datum => {
    createNode(datum)
  })
  return
}
