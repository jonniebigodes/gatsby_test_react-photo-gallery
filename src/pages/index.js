import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SimpleImageGallery from "../components/SimpleImageGallery"
const IndexPage = () => (
  <div>
    <SEO title="Simple Gallery" />
    <SimpleImageGallery />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
