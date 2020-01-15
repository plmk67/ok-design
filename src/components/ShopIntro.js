import React from "react"
import styles from "../css/shopIntro.module.css"
import { Container, Col, Row } from "reactstrap"

const ShopIntro = () => {
  return (
    <div className={styles.main}>
      <Col md="6.5" className={styles.latestProduct}>
        <div>
          <figure>
            <img
              src="https://readcereal.com/wp-content/uploads/2019/09/Cereal-Volume-18-shop.jpg"
              alt="cover photo"
            />
          </figure>
        </div>
        <div className={styles.productMeta}>
          <span className={styles.title}>Cereal Volume 18</span>
          <span className={styles.subtitle}>AUTUMN WINTER 2019</span>
          <span className={styles.price}>£12.00</span>
          <span className={styles.description}>
            In this volume, we delve into the subject of legacy. We explore the
            architecture of Gio Ponti and Carlo Scarpa, the art of Joan Miró,
            and the photography of Fan Ho. We spend the day with Rupi Kaur,
            discuss design with Jonathan Anderson, and present an autumn style
            edit at Kettle’s Yard.
          </span>
          <span className={styles.link}>
            <a href="/">View More</a>
          </span>
        </div>
      </Col>
      <Col md="5.5" className={styles.introMessage}>
        Right side
      </Col>
    </div>
  )
}

export default ShopIntro
