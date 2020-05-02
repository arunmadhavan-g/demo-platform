const pages = [
  {
    repo: "arunmadhavan-g/config-driven-ui",
    file: "README.md",
    title: "Building a Config Driven UI in React - Part 1",
    publishedOn: "2019-11-24T12:39:18.088Z",
    author: "Arun Madhavan",
    tags: ["reactjs", "javascript", "ui"],
    description: "Part 1 of a 2 part blog, where I share my experiences with development of a configuration driven UI to build their executive dashboard",
  },
  {
    repo: "arunmadhavan-g/multi-level-dnd",
    file: "README.md",
    title: "Building a Config Driven UI in React - Part 2",
    publishedOn: "2020-03-21T12:39:18.088Z",
    author: "Arun Madhavan",
    tags: ["reactjs", "javascript", "ui"],
    description: "Part 2 of a 2 part blog, where I share my experiences with development of a configuration driven UI to build their executive dashboard",
  },
  {
    repo: "arunmadhavan-g/blogs",
    file: "TransientBPMN.md",
    title: "Implementing a transient BPM for a multi-tenant system",
    publishedOn: "2020-05-02T12:39:18.088Z",
    author: "Arun Madhavan",
    tags: ["Java", "Spring", "BPM"],
    description: "I share my experience with how I integrated a BPM system for a multi-tenant solution, and kept it transient to keep things simple",
  },
]

const titleImage = "src/images/tech-musings.png"

const pathPrefix = "/demo-platform"

const siteMetadata = {
  title: `Tech Musings.dev`,
  description: `A Dev Blog`,
  author: `Arun Madhavan Govindarajan`,
  blogHeader: "A Blog from Arun Madhavan",
  socials: [
    { icon: "twitter", url: "https://twitter.com/ArunmadhavanG" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/arunmadhavang" },
    { icon: "github", url: "https://github.com/arunmadhavan-g" },
  ],
  profileImageURL: "https://avatars1.githubusercontent.com/u/1178415?s=460&v=4",
}


module.exports = {
  siteMetadata,
  pages,
  titleImage,
  pathPrefix,
}
