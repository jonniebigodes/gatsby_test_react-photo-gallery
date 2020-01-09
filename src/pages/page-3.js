import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SimpleGalleryWithJSONGraphql from '../components/SimpleGalleryWithJSONGraphql'
const ThirdPage = () => (
  <div>
    <SEO title="Responsive Gallery" />
    <SimpleGalleryWithJSONGraphql/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ThirdPage
