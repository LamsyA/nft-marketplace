import React from "react"
import Artwork from "./components/Artwork"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Transactions from "./components/Transactions"

function App() {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
      <Header/>
      <Banner />
      </div>
      <Artwork/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
