import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Header } from "semantic-ui-react"
import Tags from "./Tags"
import styles from "../styles/TableOfContents.module.scss"
import { formatDate } from "../helpers/format"

const TableOfContents = () => {
  const pages = useStaticQuery(graphql`
    {
      allSitePage {
        edges {
          node {
            path
            context {
              page {
                publishedOn
                title
                tags
              }
            }
          }
        }
      }
    }
  `)

  return pages.allSitePage.edges
    .filter(x => x.node.context.page)
    .map(x => x.node)
    .map(x => {
      return (
        <div>
          <div className={styles.title}>
            <Link to={x.path}>
              <Header size={"large"}>{x.context.page.title}</Header>
            </Link>
            <Tags items={x.context.page.tags} />
          </div>
          <div className={styles.date}>
            {formatDate(x.context.page.publishedOn)}
          </div>
        </div>
      )
    })
}

export default TableOfContents
