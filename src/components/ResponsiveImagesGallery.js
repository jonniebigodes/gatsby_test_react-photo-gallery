import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"

/**
 * simple functional component to fetch the images with Gatsby and supply them to React photo Gallery
 * based on example for setting src/srcSet supplied by react-photo-gallery
 */
const ResponsiveImagesGallery = () => {
     // create a variable to fetch the images inside the src\images folder with the exception of the icon
  const ResponsiveQueryResult = useStaticQuery(
    graphql`
      {
        allImageSharp(
          filter: { fluid: { originalName: { ne: "gatsby-icon.png" } } }
        ) {
          nodes {
            id
            fluid(maxWidth: 1920) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    `
  )
   // destructure the result of the query
  const { nodes } = ResponsiveQueryResult.allImageSharp

  // iterates over the query result and creates a array of objects to match the 
  // requirements of the react-photo-gallery package
  const responsiveGalleryImages = nodes.map((photo, index) => {
      /**
       * as the srcSet in Gatsby is a string you can check it by yourself in the graphiQL editor
       *  and the react-photo-gallery expects a array of strings
       * we're going to create a variable to split the string so that it can be supplied
       */
      const splitSrcSet=photo.fluid.srcSet.split(',\n')
      if (index%2===0){
          return {
              src:photo.fluid.src,
              width: 4,
              height: 3,
              sizes:[photo.fluid.sizes],
              srcSet:splitSrcSet
          }
         
      }
      return {
        src: photo.fluid.src,
        width: 1,
        height: 1,
        sizes:[photo.fluid.sizes],
        srcSet:splitSrcSet
      }
  })
  return <div><Gallery photos={responsiveGalleryImages}/></div>
}

export default ResponsiveImagesGallery
