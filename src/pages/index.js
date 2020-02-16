import React from "react"
import SEO from "../components/seo"
import SiteHeader from "../components/SiteHeader"
import Profile from "../components/Profile"
import TableOfContents from "../components/TableOfContents"
import styles from "../styles/index.module.scss"
import SiteFooter from "../components/SiteFooter"

const IndexPage = () => (
  <div className={styles.mainContent}>
    <SEO title="Home" />
    <SiteHeader>
      {(siteInfo) => <Profile {...siteInfo}/>}
    </SiteHeader>
    <div className={styles.content}>
      <TableOfContents />
    </div>
    <SiteFooter />
  </div>
)

export default IndexPage
