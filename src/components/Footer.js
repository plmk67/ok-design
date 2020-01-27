import React from "react"
import { Container, Col, Row, Input } from "reactstrap"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.footer}>
        <Row>
          <div className={styles.aboutText}>
            <p>
              Cereal is a biannual, travel & style magazine based in the United
              Kingdom. Each issue focusses on a select number of destinations,
              alongside engaging interviews and stories on unique design, art,
              and fashion.
            </p>
          </div>

          <div className={styles.footerMenu}>
            <Col>
              <p>Info</p>
              <li>Stockists</li>
              <li>Contact</li>
              <li>Careers</li>
            </Col>
            <Col>
              <p>Media</p>
              <li>Playlists</li>
              <li>Film</li>
            </Col>
            <Col>
              <p>Website</p>
              <li>Terms</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </Col>
          </div>

          <div className={styles.footerSocial}>
            <Row>
              <Col>
                <p>Newsletter</p>
                <input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="email"
                />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
