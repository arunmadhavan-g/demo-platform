const axios = require("axios")
const _ = require("lodash")
const { pages } = require("./config")

const get = async endpoint => (await axios.get(endpoint)).data
const getInfoJson = (user, repo) =>
  get(`https://raw.githubusercontent.com/${user}/${repo}/master/info.json`)
const getReadMeContent = (user, repo) =>
  get(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`)

exports.createPages = async ({ actions: { createPage } }) => {
  const pageDatas = await Promise.all(
    pages.map(async page => {
      const [user, repo] = page.split("/")
      const info = await getInfoJson(user, repo)
      const content = await getReadMeContent(user, repo)
      return { ...info, content, pagePath: page }
    })
  )

  pageDatas.forEach(page => {
    createPage({
      path: `/${_.camelCase(page.title)}`,
      component: require.resolve("./src/templates/page-template.js"),
      context: { page },
    })
  })
}
