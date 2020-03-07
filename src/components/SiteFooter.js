import React from "react"
import styles from "../styles/SiteFloor.module.scss";

const SiteFooter = ({siteInfo}) => (
  <div className={styles.footer}>
    Copyright &copy; 2019 {siteInfo.author}. All Rights Reserved.
  </div>
)

export default SiteFooter
