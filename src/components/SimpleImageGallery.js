import React from "react"
import Gallery from "react-photo-gallery"
import { useStaticQuery, graphql } from "gatsby"

/**
 * simple functional component to fetch the images with Gatsby and supply them to React photo Gallery
 * based on simple example supplied by react-photo-gallery
 */
const SimpleImageGallery = () => {
  // create a variable to fetch the images inside the src\images folder with the exception of the icon
  const simpleQueryResult = useStaticQuery(graphql`
    {
      allImageSharp(
        filter: { fluid: { originalName: { ne: "gatsby-icon.png" } } }
      ) {
        nodes {
          id
          fluid {
            src
          }
        }
      }
    }
  `)
  // destructure the result of the query
  const { nodes } = simpleQueryResult.allImageSharp

  // iterates over the query result and creates a array of objects to match the 
  // requirements of the react-photo-gallery package
  const galleryImages = nodes.map((photo, index) => {
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
      <Gallery photos={galleryImages}/>
    </div>
  )
}

export default SimpleImageGallery
