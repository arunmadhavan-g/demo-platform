module.exports = {
  siteMetadata: {
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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tech-musings.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],

  pathPrefix: "/demo-platform",
}
