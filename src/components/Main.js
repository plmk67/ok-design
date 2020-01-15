import React from "react"
import { Container } from "reactstrap"
import styles from "../css/main.module.css"
import ShopIntro from '../components/ShopIntro'
import Products from '../components/Products'

const Main = () => {
  return (
    <div className={styles.main}>
      <ShopIntro/>
      <Products/>
    </div>
  )
}

export default Main
