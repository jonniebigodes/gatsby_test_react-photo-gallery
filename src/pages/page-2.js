import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import ResponsiveImagesGallery from '../components/ResponsiveImagesGallery'
const SecondPage = () => (
  <div>
    <SEO title="Responsive Gallery" />
    <ResponsiveImagesGallery/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
