const siteMetadata = {
  title: `Tech Musings.dev`,
  description: `A Dev Blog`,
  author: `Arun Madhavan Govindarajan`,
  blogHeader: "A Blog from Arun Madhavan",
  socials : [
    { icon: "twitter", url: "https://twitter.com/ArunmadhavanG" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/arunmadhavang" },
    { icon: "github", url: "https://github.com/arunmadhavan-g" },
  ],
  profileImageURL: "https://avatars1.githubusercontent.com/u/1178415?s=460&v=4"
}


const pages = [
  "arunmadhavan-g/config-driven-ui",
  "arunmadhavan-g/multi-level-dnd"
]

const titleImage = "src/images/tech-musings.png"

const pathPrefix = "/demo-platform"



module.exports = {
  siteMetadata,
  pages,
  titleImage,
  pathPrefix
}
