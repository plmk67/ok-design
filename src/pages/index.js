import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import ShopMessage from "../components/ShopMessage"
import ShopIntro from "../components/ShopIntro"
import Main from "../components/Main"
import Footer from '../components/Footer'

import "bootstrap/dist/css/bootstrap.css"

const index = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Navbar />
        <ShopMessage data={"Free shipping on all orders over $100"} />
        <div>
          <Main />
        </div>
        <Footer/>
      </Layout>
    </div>
  )
}

export default index
