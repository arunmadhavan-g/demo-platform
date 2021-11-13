const {camelCase} = require("lodash")
const { Octokit } = require("@octokit/rest");
const frontmatterParser = require('@github-docs/frontmatter')
const renderContent = require('@github-docs/render-content')

const octokit = new Octokit({ 
  auth: process.env.GIT_TOKEN,
});

const downloadContent = async path => {
  const {data} =  (await octokit.rest.repos.getContent({
                    owner: "arunmadhavan-g",
                    repo: "Profile",
                    path: path
                  }));
              
  return Buffer.from(data.content, 'base64').toString('utf-8');
}

exports.sourceNodes = async ({node, actions, createNodeId, createContentDigest}, pluginOptions) => {
  const {createNode} = actions

  const {data} = await octokit.request("GET /repos/{owner}/{repo}/contents", {
    owner: "arunmadhavan-g",
    repo: "Profile",
    path: "/"
  });

  (await Promise.all(data
  .filter(x => x.name.includes("Project"))
  .map(async x => ({...x, content: (await downloadContent(x.path))}))
  .map(async x => {
    const { data, content } = frontmatterParser((await x).content);
    return ({
    id: createNodeId(`${x.name}-repoRecords`),
          children: [],
          internal: {
              type: `repoRecords`,
          },
          pageInfo: {
            ...(await x), 
            htmlContent: await renderContent(content, {}),
            frontmatter: data,
          },
    })
  })))
  .forEach(x => {
    createNode({...x, internal:{...x.internal, contentDigest: createContentDigest(x)}})
  })
  
};



exports.createPages = async ({ graphql, actions: { createPage } }) => {

  (await graphql(`
  query MyQuery {
    allMultiGitSource {
      edges {
        node {
          pageInfo {
            author
            content
            description
            pagePath
            publishedOn
            tags
            title
          }
        }
      }
    }
  }`)).data.allMultiGitSource.edges.map(x => x.node.pageInfo).forEach(page => {
    createPage({
      path: `/${camelCase(page.title)}`,
      component: require.resolve("./src/templates/page-template.js"),
      context: { page },
    })
  });

  const profileData = (await graphql(`
  query MyQuery {
    allRepoRecords {
      edges {
        node {
          pageInfo {
            htmlContent
            frontmatter {
              company
              duration
              projectName
              role
              tech
              achievements
            }
          }
        }
      }
    }
  }`)).data.allRepoRecords.edges.map(x => x.node.pageInfo)

  createPage({
    path: `/About`,
    component: require.resolve("./src/templates/profile-template.js"),
    context: { profileData },
  })
}
