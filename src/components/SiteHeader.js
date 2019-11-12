import React from "react"
import { Header } from "semantic-ui-react"
import { Link } from "gatsby"
import styles from "../styles/SiteHeader.module.scss"

const SiteHeader = ({ forContent = false, children }) => (
  <div
    className={`${styles.content} ${forContent ? `${styles.forContent}` : ""}`}
  >
    <Link to="/">
      <Header as={forContent ? "h3" : "h1"}>Together With Tech</Header>
    </Link>
    <div>{children}</div>
  </div>
)

export default SiteHeader
