import React from "react"
import { Header, Image } from "semantic-ui-react"
import { Icon } from "semantic-ui-react"
import styles from "../styles/Profile.module.scss"

const socials = [
  { icon: "twitter", url: "https://twitter.com/ArunmadhavanG" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/arunmadhavang" },
  { icon: "github", url: "https://github.com/arunmadhavan-g" },
]
const Profile = () => (
  <div className={styles.container}>
    <div>
      <Header as="h4">A Blog from Arun Madhavan</Header>
      <div className={styles.social}>
        {socials.map(x => {
          return (
            <a href={x.url}>
              <Icon name={x.icon} size="large" />
            </a>
          )
        })}
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
