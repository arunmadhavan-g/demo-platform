import { graphql, useStaticQuery } from "gatsby"


const CommonParent = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            id
            siteMetadata {
              title
              description
              author
              blogHeader
              profileImageURL
              socials {
                icon
                url
              }
            }
          }
        }
      }
      allSitePage(sort: { order: DESC, fields: context___page___publishedOn }) {
        edges {
          node {
            path
            context {
              page {
                publishedOn
                title
                tags
                description
              }
            }
          }
        }
      }
    }
  `)

  const pages = data.allSitePage
    .edges
    .filter(x => x.node.context && x.node.context.page)
    .map(x => x.node)

  const siteInfo = data.allSite.edges[0].node.siteMetadata

  return children(siteInfo, pages)
}

export default CommonParent
