import React from "react"
import styles from "../styles/Tags.module.scss"

const Tags = ({ items }) => (
  <div className={styles.tagContainer}>
    {items.map(tag => (
      <div className={styles.tags}>{tag}</div>
    ))}
  </div>
)

export default Tags

