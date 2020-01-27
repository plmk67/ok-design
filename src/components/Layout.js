import React from "react"
import styles from '../css/layout.module.css'
const Layout = ({ children }) => {
  return <html className={styles.main}>{children}</html>
}

export default Layout
