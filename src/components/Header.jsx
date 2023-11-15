import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const desktop = useMediaQuery({query: "(min-width: 768px)"})

    const desktopNav = <>
            <input type="image" src="/images/logo.svg"/>
            <ul className="flex gap-8 text-white">
                <li><a href="#">About</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Get Started</a></li>
            </ul>
    </>
    
    const mobileNav = <div className={`flex justify-between items-center w-[100%] ${isOpen?"z-20":"z-0"}`}>
        <input type="image" src="/images/logo.svg"/>
        <input onClick={() => {setIsOpen(!isOpen)}} type='image' src={`/images/${isOpen?"icon-close-menu.svg":"icon-hamburger.svg"}`}/>
        <ul className={`absolute font-commissioner font-medium rounded-lg flex flex-col bg-white text-black w-[90%] top-20 left-[5%] ${isOpen?"h-[169.6px]":"h-0"} overflow-hidden transition-all`}>
            <li className='p-4'><a href="#">About</a></li>
            <hr/>
            <li className='p-4'><a href="#">Discover</a></li>
            <hr/>
            <li className='p-4'><a href="#">Get Started</a></li>
        </ul>
    </div>

    return (
        <>
        <div className="flex justify-between items-center md:px-32 md:py-10 mobile:px-5 mobile:py-8">
            {desktop?desktopNav:mobileNav}
            {desktop?null:<div className={`absolute top-0 left-0 ${isOpen?" bg-black/60 z-10":" bg-none -z-10"} w-[100%] h-[1000px]`}></div> } 
        </div>
        <div className='w-[100%] h-0 pb-[13%]'></div>
        </>
    )
}

export default Header