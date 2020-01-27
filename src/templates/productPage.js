import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import ShopMessage from "../components/ShopMessage"
import Footer from '../components/Footer'
import styles from "../css/productPage.module.css"

import { Col, Row } from "reactstrap"

const productPage = ({ data }) => {
  const {
    contentful_id,
    productName,
    slug,
    price,
    description,
    images,
  } = data.product

  console.log(images)

  return (
    <Layout>
      <Navbar />
      <ShopMessage data={"Free shipping on all orders over $100"} />
      <Row className={styles.main}>
        <Col className={styles.product} md="4">
          <div className={styles.product_info}>
            <h1 className={styles.product_title}>{productName}</h1>
            <p className={styles.price}>${price.toFixed(2)}</p>
            <p className={styles.productDescription}>
              {description.description}
            </p>
          </div>
        </Col>
        <Col className={styles.product_gallery} md="8">
          <div>
            {images.map((image, index) => {
              return (
                <Img className={styles.image} key={index} fluid={image.fluid} />
              )
            })}
          </div>
        </Col>

        
      </Row>
      <Footer/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: contentfulProduct(slug: { eq: $slug }) {
      productName
      price
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        description
      }
    }
  }
`

export default productPage
