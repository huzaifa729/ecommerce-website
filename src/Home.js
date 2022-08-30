import React from 'react'
import AllProduct from './AllProduct'
import Brands from './Brands'
import CarouselController from './component/CarouselController'
import DApp from './DApp'
import Doc from './Doc'
import Footer from './Footer'
import Hello from './Hello'
import Infinity from './Infinity'
import MultiItemCarousel from './MultiitemCarousel'
import Slides from './Slides'

function Home() {
  return (
    <div>
  
  <CarouselController/>
  {/* <Hello/> */}
  <AllProduct/>
  <Doc/>
  <Brands/>
  <Slides/>
  <MultiItemCarousel/>
  <MultiItemCarousel/>
  <Infinity/>
  <DApp/>
  <Footer/>

    </div>
  )
}

export default Home