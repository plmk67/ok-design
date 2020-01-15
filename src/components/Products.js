import React from "react"
import { Col, Card, CardImg, CardBody } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../css/products.module.css"

const Products = () => {
  const response = useStaticQuery(getData)
  const data = response.featuredData.edges

  console.log(data)

  return (
    <div className={styles.main}>
      {data.map(({ node }) => {
        return (
          <Col key={node.id} md="4">
            <Card className={styles.card}>
            <Image top fluid={node.images[0].fluid} />
              <CardBody>
                <div className={styles.productName}>{node.name}</div>
                <div className={styles.price}>${node.price.toFixed(2)}</div>
              </CardBody>
            </Card>
          </Col>
        )
      })}
    </div>
  )
}

const getData = graphql`
  query {
    featuredData: allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          parent {
            id
          }
          name
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          price
        }
      }
    }
  }
`

export default Products
