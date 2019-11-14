import React, { useEffect } from "react"
import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import "semantic-ui-css/semantic.min.css"
import BlogHeader from "../components/BlogHeader"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import styles from "../styles/PageTemplate.module.scss"

const updateSrc = (tagName, property, pagePath) => {
  const elems = document.getElementById("preview").getElementsByTagName(tagName)

  for (let i = 0; i < elems.length; i++) {
    elems[i][property] = `https://github.com/${pagePath}/${elems[
      i
    ].getAttribute(property)}`
  }
}

export default ({ pageContext: { page } }) => {
  useEffect(() => {
    updateSrc("img", "src", `${page.pagePath}/raw/master`)
    updateSrc("a", "href", `${page.pagePath}/blob/master`)
  })

  return (
    <div className={styles.container}>
      <SiteHeader forContent />
      <div className={styles.content}>
        <BlogHeader
          publishedOn={page.publishedOn}
          title={page.title}
          tags={page.tags}
          repoLink={page.pagePath}
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
      <SiteFooter />
    </div>
  )
}
