import React from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../css/products.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Products = () => {
  const response = useStaticQuery(getProducts)
  const data = response.allContentfulProduct.edges

  return (
    <Row className={styles.main}>
   
        {data.map(({ node }) => {
          return (
            <Col className={styles.cardLayout} key={node.id} md="4">
              <Card sm="4" md="3" className={styles.card}>
                <AniLink to={`product/${node.slug}`}>
                  <Img top fluid={node.images[0].fluid} />
                </AniLink>

                <CardBody>
                  <div className={styles.productName}>{node.productName}</div>
                  <div className={styles.price}>${node.price.toFixed(2)}</div>
                </CardBody>
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}

const getProducts = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          contentful_id
          productName
          slug
          price
          description {
            description
          }
          publish
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
