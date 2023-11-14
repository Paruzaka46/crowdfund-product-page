import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import ProductName from './components/ProductName'

function App() {
  const desktop = useMediaQuery({query: "(min-width: 768px)"})

  return (
    <div className=' bg-dark-grey/10 h-[100vh]'>
      <img className=' -z-10 absolute w-[100%]' src={desktop?"images/image-hero-desktop.jpg":"images/image-hero-mobile.jpg"}/>
      {/* <div className=' -z-20 absolute w-[100%] h-[100vh] bg-pink-300'></div> */}
      <Header/>
      <ProductName/>  
    </div>
  )
}

export default App
