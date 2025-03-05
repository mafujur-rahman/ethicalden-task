
import './App.css'
import Navbar from './components/HomePage/Navbar'
import Banner from './components/HomePage/Banner'
import Carousel from './components/HomePage/Carousel'
import WhatWeDo from './components/HomePage/WhatWeDo'

function App() {


  return (
    <>
      <div className='relative'>
        <Navbar />
        <Banner />
        <Carousel />
        <WhatWeDo />
      </div>
    </>
  )
}

export default App
