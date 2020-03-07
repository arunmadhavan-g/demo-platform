import React from "react"
import { Link } from "gatsby"
import { Header } from "semantic-ui-react"
import Tags from "./Tags"
import styles from "../styles/TableOfContents.module.scss"
import { formatDate } from "../helpers/format"

const TableOfContents = ({ pages }) =>
  pages
    .map(x => {
      return (
        <div className={styles.content}>
          <div className={styles.title}>
            <Link to={x.path}>
              <Header size={"large"}>{x.context.page.title}</Header>
            </Link>
            <Tags items={x.context.page.tags}/>
          </div>
          <div className={styles.date}>
            {formatDate(x.context.page.publishedOn)}
          </div>
        </div>
      )
    })

export default TableOfContents
