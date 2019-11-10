import React from "react"
import { Header } from "semantic-ui-react"
import { Link } from "gatsby"
import styles from "../styles/SiteHeader.module.scss"

const SiteHeader = ({ children }) => (
  <div className={styles.content}>
    <Link to="/">
      <Header as="h1">Together With Tech</Header>
    </Link>
    <div>{children}</div>
  </div>
)

export default SiteHeader
