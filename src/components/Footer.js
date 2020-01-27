import React from "react"
import { Container, Col, Row, Input } from "reactstrap"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.footer}>
        <Row>
          <Col className={styles.aboutText}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>

          <Col className={styles.footerMenu}>
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
          </Col>

          <Col className={styles.footerSocial}>
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
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
