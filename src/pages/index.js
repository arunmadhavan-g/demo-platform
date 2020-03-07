import React from "react"
import SEO from "../components/seo"
import SiteHeader from "../components/SiteHeader"
import Profile from "../components/Profile"
import TableOfContents from "../components/TableOfContents"
import styles from "../styles/index.module.scss"
import SiteFooter from "../components/SiteFooter"
import CommonParent from "../components/CommonParent"

const IndexPage = () =>
  <CommonParent>
    {(siteInfo, pages) =>
      <div className={styles.mainContent}>
        <SEO title="Home"/>
        <SiteHeader siteInfo={siteInfo}>
          {(siteInfo) => <Profile {...siteInfo}/>}
        </SiteHeader>
        <div className={styles.content}>
          <TableOfContents pages={pages}/>
        </div>
        <SiteFooter siteInfo={siteInfo}/>
      </div>
    }
  </CommonParent>


export default IndexPage
