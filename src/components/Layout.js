import React from "react"
import styles from '../css/layout.module.css'
const Layout = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default Layout
