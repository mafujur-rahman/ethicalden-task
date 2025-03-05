
import './App.css'
import Navbar from './components/HomePage/Navbar'
import Banner from './components/HomePage/Banner'
import Carousel from './components/HomePage/Carousel'
import WhatWeDo from './components/HomePage/WhatWeDo'
import LatestProjects from './components/HomePage/LatestProjects'
import VideoSection from './components/HomePage/VideoSection'
import CreativeStudio from './components/HomePage/CreativeStudio'

function App() {


  return (
    <>
      <div className='relative'>
        <Navbar />
        <Banner />
        <Carousel />
        <WhatWeDo />
        <LatestProjects />
        <VideoSection />
        <CreativeStudio />
      </div>
    </>
  )
}

export default App
