/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * api hook to generate pages programmatically
 * You could read more about it in https://www.gatsbyjs.org/docs/node-apis/#createPages
 * @param {Object} actions are a set of actions that gatsby will allow you to do
 * @param {*} graphql will run your query
 * @param {*} reporter is a helper function to allow you to throw something into the console
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  // destructures the action needed
  const { createPage } = actions

  // graphql query to run
  const fetchAllImagesResult = await graphql(`
    {
      allImageSharp(
        filter: { fluid: { originalName: { ne: "gatsby-icon.png" } } }
      ) {
        nodes {
          id
          fluid {
            src
            originalName
          }
        }
      }
    }
  `)
  // checks for errors
  if (fetchAllImagesResult.errors) {
    reporter.panic("failed to create posts", result.errors)
  }
  // loads the json file
  const FourthGalleryData = require("./src/content/fourthGallery.json")

  // destructure the result of the query
  const { nodes } = fetchAllImagesResult.data.allImageSharp

  // filters the data like before
  const imagesToGallery = nodes
    .filter(item => FourthGalleryData.photos.includes(item.fluid.originalName))
    .map((photo, index) => {
      if (index % 2 === 0) {
        return {
          src: photo.fluid.src,
          width: 4,
          height: 3,
        }
      }
      return {
        src: photo.fluid.src,
        width: 1,
        height: 1,
      }
    })
  // calls the action
  createPage({
    path: "/page-5/",
    component: require.resolve("./src/templates/GalleryTemplate.js"),
    context: {
      galleryImages: imagesToGallery,
      titleOfGallery: FourthGalleryData.galleryTitle,
    },
  })
}
