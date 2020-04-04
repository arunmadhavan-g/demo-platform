const _ = require("lodash")

exports.createPages = async ({ graphql, actions: { createPage } }) =>
  (await graphql(`
  query MyQuery {
    allMultiGitSource {
      edges {
        node {
          pageInfo {
            author
            content
            description
            pagePath
            publishedOn
            tags
            title
          }
        }
      }
    }
  }`)).data.allMultiGitSource.edges.map(x => x.node.pageInfo).forEach(page => {
    createPage({
      path: `/${_.camelCase(page.title)}`,
      component: require.resolve("./src/templates/page-template.js"),
      context: { page },
    })
  })
