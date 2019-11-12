import React, { useEffect } from "react"
import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import "semantic-ui-css/semantic.min.css"
import BlogHeader from "../components/BlogHeader"
import SiteHeader from "../components/SiteHeader"
import styles from "../styles/PageTemplate.module.scss"

export default ({ pageContext: { page } }) => {
  useEffect(() => {
    const imgs = document.getElementsByTagName("img")

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = `https://github.com/${page.pagePath}/raw/master/${imgs[
        i
      ].getAttribute("src")}`
    }
  })

  return (
    <div className={styles.container}>
      <SiteHeader forContent />
      <div className={styles.content}>
        <BlogHeader
          publishedOn={page.publishedOn}
          title={page.title}
          tags={page.tags}
        />
        <div id="preview" className={styles.markDownContent}>
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
}
