import React from "react"
import { Container, Row } from "reactstrap"
import styles from "../css/shopMessage.module.css"

const ShopMessage = ({ data }) => {
  return (
    <div className={styles.message}>
      <p>{data}</p>
    </div>
  )
}
export default ShopMessage
