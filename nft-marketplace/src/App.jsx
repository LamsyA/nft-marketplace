import React from "react"
import Artwork from "./components/Artwork"
import Banner from "./components/Banner"

import Header from "./components/Header"

function App() {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
      <Header/>
      <Banner />
      </div>
      <Artwork/>
    </div>
  )
}

export default App
