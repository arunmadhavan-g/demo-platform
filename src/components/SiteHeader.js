import React from "react"
import { Header } from "semantic-ui-react"
import { Link } from "gatsby"
import styles from "../styles/SiteHeader.module.scss"

const SiteHeader = ({ siteInfo, forContent = false, children, forProfile=false }) => {
  return (
    <div
      className={`${styles.content} ${forContent ? `${styles.forContent}` : ""} ${forProfile? `${styles.forProfile}`: ""} `}
    >
      <Link to="/">
        <Header as={forContent ? "h3" : "h1"}>{siteInfo.title}</Header>
      </Link>
      {children && <div>{children(siteInfo)}</div>}
    </div>
  )
}

export default SiteHeader
