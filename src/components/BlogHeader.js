import React from "react"
import styles from "../styles/BlogHeader.module.scss"
import { Header } from "semantic-ui-react"
import { formatDate } from "../helpers/format"
import Tags from "./Tags"
import { Icon } from "semantic-ui-react"

const BlogHeader = ({ title, publishedOn, tags, repoLink }) => (
  <div className={styles.header}>
    <div className={styles.title}>
      <Header size="huge">{title}</Header>
    </div>
    <div className={styles.subTitle}>
      <Header size="small">{formatDate(publishedOn)}</Header>
    </div>
    <div className={styles.tagsContainer}>
      <Tags items={tags} />
      <div className={styles.git}>
        <a href={`https://github.com/${repoLink}`}>
          <Icon name="github" />
        </a>
      </div>
    </div>
  </div>
)

export default BlogHeader
