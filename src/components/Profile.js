import React from "react"
import { Header, Image } from "semantic-ui-react"
import { Icon } from "semantic-ui-react"
import styles from "../styles/Profile.module.scss"

const Profile = () => (
  <div className={styles.container}>
    <div>
      <Header as="h4">A Blog from Arun Madhavan</Header>
      <div className={styles.social}>
        <Icon name="twitter" size="large" />
        <Icon name="linkedin" size="large" />
        <Icon name="github" size="large" />
      </div>
    </div>
    <Image
      circular
      size="tiny"
      src="https://avatars1.githubusercontent.com/u/1178415?s=460&v=4"
    />
  </div>
)

export default Profile
