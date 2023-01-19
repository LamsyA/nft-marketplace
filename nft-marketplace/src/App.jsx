import React from "react"
import Banner from "./components/Banner"
import Collections from "./components/Collections"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MintNFT from "./components/MintNFT"
import NewNFT from "./components/NewNFT"
import Transactions from "./components/Transactions"




function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
      <Header/>
      <Banner />
      </div>
      <Collections />
      <Transactions/>
      <Footer/>
      <MintNFT/>
      <NewNFT/>
      
      
  
    </div>
  )
}

export default App
