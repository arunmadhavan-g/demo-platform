import React from "react"
import "semantic-ui-css/semantic.min.css"
import styles from "../styles/ProfileTemplate.module.scss"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Profile from "../components/Profile"
import CommonParent from "../components/CommonParent"

export default ({ pageContext: { profileData } }) =>
<CommonParent>
{(siteInfo, _) => {
      return (
        <div className={styles.container}>
            <SiteHeader siteInfo={siteInfo} forContent forProfile>
                {(siteInfo) => <Profile {...siteInfo} authorForHeader/>}
            </SiteHeader>
            <div className={styles.content}>
                {profileData.map(({frontmatter}) => 
                    <div className={styles.projectDetails}>
                        <div>{frontmatter.projectName}</div>
                        <div>{frontmatter.company}</div>
                        <div>{frontmatter.role}</div>
                        <div>{frontmatter.duration}</div>
                    </div>    
                )}
            </div>
            <SiteFooter siteInfo={siteInfo}/>
        </div>
      )
    }}
</CommonParent>


// what do we need to build
// achievement list
// tech list
// Company Experiences
// Project Experiences
