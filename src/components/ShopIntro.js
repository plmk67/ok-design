import React from "react"
import styles from "../css/shopIntro.module.css"
import { Container, Col, Row } from "reactstrap"

const ShopIntro = () => {
  return (
    <Row className={styles.main}>
      <Col md="6.5" className={styles.latestProduct}>
        <Col>
          <figure>
            <img
              src="https://images.ctfassets.net/y8xs8bpyk93r/3ONx43C5qJpE0OrJbVQl9L/f122466e77bc94429268b413451c87f9/DSC00308.jpg"
              alt="cover photo"
            />
          </figure>
        </Col>
        <Col className={styles.productMeta}>
          <span className={styles.title}>Oscar Kwong  Designer</span>
          <span className={styles.description}>
            Lorem ipsum dolor amet tbh gastropub normcore you probably haven't
            heard of them shabby chic art party XOXO mustache tousled four
            dollar toast austin live-edge bitters. Copper mug shoreditch viral
            pinterest brunch put a bird on it ethical green juice retro ugh echo
            park palo santo. Tofu taxidermy YOLO stumptown, man braid flannel
            kombucha prism beard dreamcatcher actually taiyaki. Trust fund
            bushwick humblebrag affogato hot chicken, next level food truck
            gochujang crucifix tacos. Whatever semiotics church-key post-ironic
            iceland hammock chillwave banjo four dollar toast intelligentsia
            occupy portland activated charcoal woke.
          </span>
          <span className={styles.link}>
            <a href="/">View More</a>
          </span>
        </Col>
      </Col>
      <Col md="5.5" className={styles.introMessage}>
        
      </Col>
    </Row>
  )
}

export default ShopIntro
