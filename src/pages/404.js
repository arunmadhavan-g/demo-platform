import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/NoFound.module.scss"
import CommonParent from "../components/CommonParent"

const NotFoundPage = () => <CommonParent>
  {
    (siteInfo, _) =>
      <Layout siteInfo={siteInfo}>
        <SEO title="404: Not found"/>
        <div className={styles.content}>
          <h2> The Page you are looking for us unavailable </h2>
          <Link to="/"> Go To Home </Link>
        </div>
      </Layout>

  }
</CommonParent>

export default NotFoundPage
