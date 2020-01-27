import React from "react"
import { Navbar, Col } from "reactstrap"
import styles from "../css/nav.module.css"
import { FaUser, FaSearch } from "react-icons/fa"

const Nav = () => {
  return (
    <Navbar className={styles.navbar}>
      <Col sm="10" className={styles.logo}>
       <a href="/">OSCAR KWONG</a>
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
