import { useState } from "react"
import { usePick, usePickUpdate } from "./ModalContext"
import { useMediaQuery } from 'react-responsive'

const Radio = ({rewards, onClose, onSubmitData}) => {
    const modalPick = usePick()
    const changePick = usePickUpdate()
    const desktop = useMediaQuery({query: "(min-width: 768px)"})
    const [number, setNumber] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setNumber(value)
        console.log(number)
    }

    return (
        <div className="relative bg-white md:p-14 mobile:p-7 font-commissioner mb-5 lg:mx-[25%] md:mx-[15%] mobile:mx-5">
            <button onClick={() => {onClose()}} className="absolute right-7 top-10">
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path className="hover:opacity-100" d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4"/></svg>
            </button>
            <h1 className="text-[24px] font-bold mb-3">Back this project</h1>
            <p className="mb-3 text-dark-grey">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <div>
                <div className={`border border-dark-grey/50 md:p-8 mobile:p-5 rounded-lg mb-5 ${modalPick === 3?" !border-dark-cyan border-2":null}`}>
                    <div className="flex items-center mb-7 md:pt-0 mobile:pt-3">
                        <input onClick={() => {changePick(3)}} className=" mr-4 border-0 w-5 h-5 accent-dark-cyan" type="radio" id="reward1" name="reward"/>
                        <label className="text-[17px] font-bold hover:text-moderate-cyan cursor-pointer" htmlFor="reward1">Pledge with no reward</label>
                    </div>
                    <p className="md:ml-10 mobile:ml-0 text-dark-grey">
                    Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                    </p>
                </div>

                {rewards.map((reward, index) => {
                    return (
                <div key={index} className={`border border-dark-grey/50 md:pt-8 mobile:pt-5 rounded-lg mb-5 ${reward.stocks?null:"opacity-50"} ${modalPick === index?" !border-dark-cyan border-2":null}`}>
                    <div className="flex justify-between md:px-8 mobile:px-5">
                        <div className="flex items-center mb-3">
                            <input onClick={() => {changePick(index)}} className="mr-4 border-0 w-5 h-5 accent-dark-cyan" type="radio" id={`reward ${index+2}`} name="reward" disabled={reward.stocks?false:true} checked={modalPick === index?true:null}/>
                            <div className="md:flex">
                                <label className={`font-bold text-[17px] ${reward.stocks && 'hover:text-moderate-cyan'} cursor-pointer mr-5`} htmlFor={`reward ${index+2}`}>{reward.name}</label>
                                <p className=" text-moderate-cyan">Pledge ${reward.pledge} or more</p>
                            </div>
                            {/* <label className="font-bold text-[17px] hover:text-moderate-cyan cursor-pointer mr-5" htmlFor={`reward ${index+2}`}>{reward.name}</label>
                            <p className=" text-moderate-cyan">Pledge ${reward.pledge} or more</p> */}
                        </div>
                        {desktop && <p><span className="font-bold mr-1">{reward.stocks}</span> left</p>}
                        {/* <p><span className="font-bold mr-1">{reward.stocks}</span> left</p> */}
                    </div>
                    <p className="md:ml-9 mobile:ml-0 md:pl-9 mobile:p-5 pr-8 pb-8 text-dark-grey">
                        {reward.desc}
                    </p>
                    {!desktop && <p className="pl-5 flex items-center gap-1 mb-5"><span className="text-xl font-bold mr-1">{reward.stocks}</span> left</p> }
                    <hr className="relative mt-4"/>
                    <div className={`flex md:flex-row mobile:flex-col justify-between items-center ${modalPick === index?"md:m-8 mobile:m-6 h-[89.2px]":"m-0 h-0 overflow-hidden"} transition-all`}>
                        <p className="mb-3">Enter your pledge</p>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            onSubmitData(parseInt(number))
                            setNumber('')
                            }} className="flex items-center justify-center">
                            <input onChange={(e) => {
                                e.preventDefault();
                                handleChange(e)
                            }} className=" outline-dark-grey/50 border-2 rounded-full py-[11px] px-7 w-28 mr-4 focus:outline-dark-cyan [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" value={number}/>
                            <button className="bg-moderate-cyan hover:bg-dark-cyan py-[12px] px-7 text-[16px] flex items-center rounded-full text-white font-semibold transition-colors">Continue</button>
                        </form>
                    </div>  
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Radio