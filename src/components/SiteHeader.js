import React from "react"
import { Header } from "semantic-ui-react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "../styles/SiteHeader.module.scss"

const SiteHeader = ({ forContent = false, children }) => {
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
    }
  `)
  const { edges } = data.allSite
  const siteInfo = edges[0].node.siteMetadata

  return (
    <div
      className={`${styles.content} ${forContent ? `${styles.forContent}` : ""}`}
    >
      <Link to="/">
        <Header as={forContent ? "h3" : "h1"}>{siteInfo.title}</Header>
      </Link>
      {children && <div>{children(siteInfo)}</div>}
    </div>
  )
}

export default SiteHeader
