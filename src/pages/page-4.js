import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SimpleGalleryWithJSONImport from '../components/SimpleGalleryWithJSONImport'
const FourthPage = () => (
  <div>
    <SEO title="Responsive Gallery" />
    <SimpleGalleryWithJSONImport/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default FourthPage