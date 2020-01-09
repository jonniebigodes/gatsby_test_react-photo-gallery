import React from "react"
import Gallery from "react-photo-gallery"
import { useStaticQuery, graphql } from "gatsby"
/**
 * simple functional component to fetch the images with Gatsby and supply them to React photo Gallery
 * based on simple example supplied by react-photo-gallery
 */
const SimpleGalleryWithJSONGraphql = () => {
  // create a variable to fetch the images inside the src\images folder with the exception of the icon
  // and the JSON contents of the file through the plugin (gatsby-plugin.json)
  const resultImagesWithJSon = useStaticQuery(
    graphql`
      {
        allPhotos: allImageSharp(
          filter: { fluid: { originalName: { ne: "gatsby-icon.png" } } }
        ) {
          nodes {
            id
            fluid {
              originalName
              src
            }
          }
        }
        firstGalleryData: withGraphqlJson(
          galleryTitle: { eq: "First Gallery" }
        ) {
          galleryTitle
          photos
        }
      }
    `
  )
  // destructures the query result
  const { allPhotos, firstGalleryData } = resultImagesWithJSon
  
  // filters the images array based on the contents of the gallery photos array
  // and creates the same object as before to be used with the react-photo-gallery package
  const imagesToGallery = allPhotos.nodes
    .filter(item => firstGalleryData.photos.includes(item.fluid.originalName))
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
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "0.85rem" }}>
        {firstGalleryData.galleryTitle}
      </h1>
      <Gallery photos={imagesToGallery} />
    </div>
  )
}

export default SimpleGalleryWithJSONGraphql
