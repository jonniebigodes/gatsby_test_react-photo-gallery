import React from "react"
import Gallery from "react-photo-gallery"
import SEO from "../components/seo"
import { Link } from "gatsby"

/**
 * Simple Functional React Component that will used as a template by Gatsby
 * @param {Object} pageContext gatsby internal prop to allow data coming from gatsby node to be used in the page
 */
const GalleryPageTemplate = ({ pageContext }) => {
  // destructures both objects coming in from gatsby-node.js
  const { galleryImages, titleOfGallery } = pageContext
  return (
    <div>
      <SEO title="Responsive Gallery" />
      <h1 style={{ textAlign: "center", marginBottom: "0.85rem" }}>
        {titleOfGallery}
      </h1>
      <Gallery photos={galleryImages} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}
export default GalleryPageTemplate
