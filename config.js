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
    publishedOn: "2020-05-02T12:40:18.088Z",
    author: "Arun Madhavan",
    tags: ["Java", "Spring", "BPM"],
    description: "I share my experience with how I integrated a BPM system for a multi-tenant solution, and kept it transient to keep things simple",
  },
  {
    repo: "arunmadhavan-g/blogs",
    file: "MigratorPlatform-Part1.md",
    title: "Building A Cloud Migration Platform - Part 1 : Provisioning the infrastructure",
    publishedOn: "2021-08-29T22:09:18.088Z",
    author: "Arun Madhavan",
    tags: ["GCP", "Node", "Architecture"],
    description: "Part 1 of a multi part blog, where I talk about how we built out a migration platform for moving from Azure to GCP",
  },
  {
    repo: "arunmadhavan-g/blogs",
    file: "MigratorPlatform-Part2.md",
    title: "Building A Cloud Migration Platform - Part 2 : Orchestration And Execution",
    publishedOn: "2021-09-18T23:45:18.088Z",
    author: "Arun Madhavan",
    tags: ["GCP", "Spring Boot", "Migration", "Architecture"],
    description: "Part 2 of a multi part blog, where I talk about how we built out a migration platform for moving from Azure to GCP",
  }
  // {
  //   repo: "arunmadhavan-g/blogs",
  //   file: "InceptionProcess.md",
  //   title: "Running an Inception - My thoughts",
  //   publishedOn: "2020-05-23T12:40:18.088Z",
  //   author: "Arun Madhavan",
  //   tags: ["Agile", "Process"],
  //   description: "I've tried to put together a few of the techniques that we have used for running a project inception of an agile project.",
  // }
]

const titleImage = "src/images/tech-musings.png"

const pathPrefix = "/demo-platform"

const siteMetadata = {
  title: `Tech Musings.dev`,
  description: `A Dev Blog`,
  author: `Arun Madhavan Govindarajan`,
  blogHeader: "A Blog from Arun Madhavan",
  socials: [
    { icon: "linkedin", url: "https://www.linkedin.com/in/arunmadhavang" },
    { icon: "github", url: "https://github.com/arunmadhavan-g" },
    { icon: "mail", url: "mailto:arunmadhavan.g@gmail.com"},
    { icon: "mobile", url: "callto:+919840808667"},
  ],
  profileImageURL: "https://avatars1.githubusercontent.com/u/1178415?s=460&v=4",
}


module.exports = {
  siteMetadata,
  pages,
  titleImage,
  pathPrefix,
}
