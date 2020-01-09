import React from "react"
import GalleryData from "../content/thirdGallery.json"
import Gallery from "react-photo-gallery"
import { useStaticQuery, graphql } from "gatsby"
/**
 * simple functional component to fetch the images with Gatsby and supply them to React photo Gallery
 * based on simple example supplied by react-photo-gallery
 */
const SimpleGalleryWithJSONImport = () => {
   // create a variable to fetch the images inside the src\images folder with the exception of the icon
  const resultAllImages = useStaticQuery(graphql`
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

  // destructures the query result
  const { nodes } = resultAllImages.allImageSharp
  // filters the images array based on the contents of the JSON file that is imported above
  // and creates the same object as before to be used with the react-photo-gallery package
  const imagesToGallery = nodes
    .filter(item => GalleryData.photos.includes(item.fluid.originalName))
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
      <h1 style={{ textAlign: "center", marginBottom: "0.85rem" }}>
        {GalleryData.galleryTitle}
      </h1>
      <Gallery photos={imagesToGallery} />
    </div>
  )
}
export default SimpleGalleryWithJSONImport
