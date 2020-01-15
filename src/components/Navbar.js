import React from "react"
import { Navbar, Col } from "reactstrap"
import styles from "../css/nav.module.css"
import { FaUser, FaSearch } from "react-icons/fa"

const Nav = () => {
  return (
    <Navbar className={styles.navbar}>
      <Col sm="10" className={styles.logo}>
        <img
          src="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?v=16033287750200382435"
          alt="monocle log"
        />
      </Col>
      <Col sm="1" className={styles.userAccount}>
        <FaUser />
      </Col>
      <Col sm="1" className={styles.search}>
        <FaSearch />
      </Col>
    </Navbar>
  )
}

export default Nav
