import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'

function App() {
  const desktop = useMediaQuery({query: "(min-width: 768px)"})

  return (
    <div>
      <img className=' -z-10 absolute w-[100%]' src={desktop?"images/image-hero-desktop.jpg":"images/image-hero-mobile.jpg"}/>
      <Header/>
    </div>
  )
}

export default App
