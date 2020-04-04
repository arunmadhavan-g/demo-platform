const axios = require("axios")
const _ = require("lodash")

const getInfoJson = ({ title, publishedOn, author, tags, description }) => ({
  title,
  publishedOn,
  author,
  tags,
  description,
})

const buildPageURL = ({ repo, file }) => `https://raw.githubusercontent.com/${repo}/master/${file}`

const getReadMeContent = async page => (await axios.get(buildPageURL(page))).data

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = (await graphql(`
  query loadPagesQuery{
  site {
    siteMetadata {
      pages {
        author
        description
        file
        publishedOn
        repo
        tags
        title
      }
    }
  }
  }`)).data.site.siteMetadata.pages

  const pageDatas = await Promise.all(
    pages.map(async page => {
      const info = getInfoJson(page)
      const content = await getReadMeContent(page)
      return { ...info, content, pagePath: page.repo }
    }),
  )

  pageDatas.forEach(page => {
    createPage({
      path: `/${_.camelCase(page.title)}`,
      component: require.resolve("./src/templates/page-template.js"),
      context: { page },
    })
  })
}
