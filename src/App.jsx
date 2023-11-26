import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header'
import ProductName from './components/ProductName'
import Statistic from './components/Statistic'
import Content from './components/Content'
import Radio from './components/Radio'
import Thanks from './components/Thanks'
import { ModalProvider } from './components/ModalContext'
import Watermark from './components/Watermark'

function App() {
  const desktop = useMediaQuery({query: "(min-width: 768px)"})
  const [pledge, setPledge] = useState(89941)
  const [backers, setBackers] = useState(5007)
  const [showModal, setShowModal] = useState(false)
  const [showThanks, setShowThanks] = useState(false)

  const appear = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  } 

  const submit = (pledge) => {
    setShowModal(false);
    setShowThanks(true);
    setPledge(prev => prev + pledge)
    setBackers(prev => prev + 1)
  }

  const closeThanks = () => {
    setShowThanks(false)
  }

  const rewards = [
    {
      name: 'Bamboo Stand',
      pledge: 25,
      desc: 'You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
      stocks: 101
    },
    {
      name: 'Black Edition Stand',
      pledge: 75,
      desc: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stocks: 64
    },
    {
      name: 'Mahogany Special Edition',
      pledge: 200,
      desc: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      stocks: 0
    }
  ]

  useEffect(() => {
    if (showModal || showThanks) {
    document.body.style.overflowY = "hidden";
    } else {
    document.body.style.overflow = "auto";
    }
}, [showModal, showThanks]);

  useEffect(() => {
    if (showModal) {
      window.scrollTo(0, 0);
    }
  }, [showModal]);


  return (
    <>
    <ModalProvider>
      <div className='relative bg-dark-grey/10 min-h-full overflow-hidden'>
        <img className=' -z-10 absolute w-[100%]' src={desktop?"images/image-hero-desktop.jpg":"images/image-hero-mobile.jpg"}/>
        <Header/>
        <div className='lg:mx-[25%] md:mx-[15%] mobile:mx-5'>
          <ProductName onShow={appear} onClose={closeModal}/> 
          <Statistic pledge={pledge} backers={backers}/>
          <Content rewards={rewards} onShow={appear}/>
        </div>

        <div className={`absolute top-0 bg-black/40 w-[100%] ${showModal?" py-32 h-[100vh] z-20":"h-0"} overflow-y-scroll`}>
          <Radio rewards={rewards} onClose={closeModal} onSubmitData={submit}/>
        </div>
        <div className={`${showThanks?"flex":"hidden"} justify-center items-center absolute top-0 w-[100%] bg-black/40 h-[100vh]`}>
          <Thanks onClose={closeThanks}/>
        </div>
      </div>
    </ModalProvider>
    <Watermark/>
    </>
  )
}

export default App
