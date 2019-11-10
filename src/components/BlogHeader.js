import React from "react"
import styles from "../styles/BlogHeader.module.scss"
import { Header } from "semantic-ui-react"

const BlogHeader = ({ title, author, publishedOn }) => (
  <div className={styles.header}>
    <Header size="huge">{title}</Header>
    <div className={styles.subTitle}>
      <Header size="small">{publishedOn}</Header>
    </div>
  </div>
)

export default BlogHeader
