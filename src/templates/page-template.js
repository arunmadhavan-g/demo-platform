import React, { useEffect } from "react"
import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"
import "semantic-ui-css/semantic.min.css"
import BlogHeader from "../components/BlogHeader"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import styles from "../styles/PageTemplate.module.scss"

const checkForURL = val => {
  const regex = new RegExp(
    "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$"
  )
  return regex.test(val)
}

const updateSrc = (tagName, property, pagePath) => {
  const elems = document.getElementById("preview").getElementsByTagName(tagName)

  for (let i = 0; i < elems.length; i++) {
    const elementValue = elems[i].getAttribute(property)
    if (!checkForURL(elementValue)) {
      elems[i][property] = `https://github.com/${pagePath}/${elementValue}`
    }
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
