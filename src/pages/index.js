import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import SimpleImageGallery from "../components/SimpleImageGallery"
const IndexPage = () => (
  <div>
    <SEO title="Simple Gallery" />
    <h1 style={{ textAlign: "center", marginBottom: "0.85rem" }}>
      Simple Gallery
    </h1>
    <div>
      <div>
        <Link to="/page-2/">Responsive Gallery</Link>
      </div>
      <div>
        <Link to="/page-3/">
          Simple Gallery with graphql (images and json plugin use)
        </Link>
      </div>

      <div>
        <Link to="/page-4/">
          Simple Gallery with graphql (images and json direct import)
        </Link>
      </div>
      <Link to="/page-5/">
        Simple Gallery created in <code>gatsby-node.js</code> programmatically
      </Link>
    </div>
    <SimpleImageGallery />
  </div>
)

export default IndexPage
