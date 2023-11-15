import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import ProductName from './components/ProductName'
import Statistic from './components/Statistic'

function App() {
  const desktop = useMediaQuery({query: "(min-width: 768px)"})
  const [pledge, setPledge] = useState(89941)
  const [backers, setBackers] = useState(5000)

  return (
    <div className=' bg-dark-grey/10 min-h-full'>
      <img className=' -z-10 absolute w-[100%]' src={desktop?"images/image-hero-desktop.jpg":"images/image-hero-mobile.jpg"}/>
      {/* <div className=' -z-20 absolute w-[100%] h-[100vh] bg-pink-300'></div> */}
      <Header/>
      <div className='lg:mx-[25%] md:mx-[15%] mobile:mx-5'>
        <ProductName/> 
        <Statistic pledge={pledge} backers={backers}/>
        <div className='h-20'></div>
      </div>
    </div>
  )
}

export default App
