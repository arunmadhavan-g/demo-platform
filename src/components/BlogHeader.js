import React from "react"
import styles from "../styles/BlogHeader.module.scss"
import { Header } from "semantic-ui-react"
import { formatDate } from "../helpers/format"
import Tags from "./Tags"

const BlogHeader = ({ title, publishedOn, tags }) => (
  <div className={styles.header}>
    <div className={styles.title}>
      <Header size="huge">{title}</Header>
      <Tags items={tags} />
    </div>
    <div className={styles.subTitle}>
      <Header size="small">{formatDate(publishedOn)}</Header>
    </div>
  </div>
)

export default BlogHeader
