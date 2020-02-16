import React from "react"
import { Header, Image } from "semantic-ui-react"
import { Icon } from "semantic-ui-react"
import styles from "../styles/Profile.module.scss"

const Profile = ({ blogHeader, profileImageURL, socials }) =>
  (
    <div className={styles.container}>
      <div>
        <Header as="h4">{blogHeader}</Header>
        <div className={styles.social}>
          {socials.map(x => {
            return (
              <a href={x.url}>
                <Icon name={x.icon} size="large"/>
              </a>
            )
          })}
        </div>
      </div>
      <Image
        circular
        size="tiny"
        src={profileImageURL}
      />
    </div>
  )

export default Profile
