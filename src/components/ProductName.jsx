import { useState } from "react"
import { useMediaQuery } from 'react-responsive'

const ProductName = () => {
    const [bookmark, setBookmark] = useState(false)
    const desktop = useMediaQuery({query: "(min-width: 768px)"})

    return (
        <div className="relative flex flex-col items-center justify-center md:mx-[25%] mobile:mx-5 mobile:text-center bg-white font-commissioner md:p-14 mobile:p-6 mobile:py-9 rounded-md">
            <img className="absolute top-[-28px]" src="/images/logo-mastercraft.svg"/>
            <h1 className="md:text-[32px] md:w-[100%]  mobile:w-[200px] mobile:text-xl md:leading-9 mobile:leading-6 font-bold mb-3 mobile:mt-3">Mastercraft Bamboo Monitor Riser</h1>
            <p className="md:text-[18px] mobile:text-[13px] text-dark-grey">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between items-center w-[100%] md:mt-10 mobile:mt-5">
                <button className=" bg-moderate-cyan hover:bg-dark-cyan py-[15px] px-10 text-lg flex items-center rounded-full text-white font-semibold transition-colors">Back this project</button>

                <button onClick={() => {setBookmark(!bookmark)}} className={`flex items-center font-commissioner font-semibold ${bookmark?" text-moderate-cyan":" text-dark-grey"} bg-dark-grey/10 rounded-full md:pr-6 transition-all`}>
                <svg className="md:mr-3" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle className={`${bookmark?"hover:fill-dark-cyan fill-moderate-cyan":"hover:fill-dark-grey fill-[#2F2F2F]"}`} fill="#2F2F2F" cx="28" cy="28" r="28"/><path className={`${bookmark?"fill-white":"#B1B1B1"}`} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg> {desktop?`${bookmark?'Bookmarked':'Bookmark'}`:null}
                </button>
            </div>
        </div>
    )
}

export default ProductName