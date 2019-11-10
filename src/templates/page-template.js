import React from "react"
import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import "semantic-ui-css/semantic.min.css"
import BlogHeader from "../components/BlogHeader"
import SiteHeader from "../components/SiteHeader"
import styles from "../styles/PageTemplate.module.scss"

export default ({ pageContext: { page } }) => (
  <div className={styles.container}>
    <SiteHeader />
    <div className={styles.content}>
      <BlogHeader
        publishedOn={page.publishedOn}
        title={page.title}
        tags={page.tags}
      />
      <div id="preview" className={styles.content}>
        {
          unified()
            .use(parse)
            .use(remark2react)
            .processSync(page.content).contents
        }
      </div>
    </div>
  </div>
)
