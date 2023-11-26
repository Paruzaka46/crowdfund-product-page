import { useState } from "react"
import { usePickUpdate } from "./ModalContext"

const Content = ({rewards, onShow}) => {
    const pickUpdate = usePickUpdate()

    return (
        <>
            <div className="bg-white md:p-14 mobile:p-7 font-commissioner mb-5 rounded-md">
                <h2 className="text-[20px] font-bold">About this project</h2>
                <br/>
                <p className=" text-dark-grey">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/>
                <br/>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
                <br/>
                <div>
                    {rewards.map((reward, index) => {
                        return (
                            <div key={index} className={`border border-dark-grey/50 p-8 mb-5 rounded-lg ${!reward.stocks?" opacity-40":null}`}>
                                <div className="flex justify-between md:flex-row mobile:flex-col mb-5">
                                    <p className="text-[18px] font-bold">{reward.name}</p>
                                    <p className="text-moderate-cyan font-semibold">Pledge ${reward.pledge} or more</p>
                                </div>
                                <p className="text-dark-grey text-[17px] mb-5">{reward.desc}</p>
                                <div className="flex justify-between md:flex-row mobile:flex-col">
                                    <p className="flex items-center text-dark-grey md:mb-0 mobile:mb-5"><span className="text-[32px] font-bold pr-2 text-black">{reward.stocks}</span> left</p>
                                    <button onClick={() => {pickUpdate(index); onShow()}} disabled={reward.stocks?false:true} className={`py-[12px] px-8 md:text-[16px] mobile:text-[14px] flex items-center rounded-full text-white font-semibold transition-colors ${reward.stocks?"bg-moderate-cyan hover:bg-dark-cyan":"bg-dark-grey"} w-fit`}>{reward.stocks?"Select Reward":"Out of stock"}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Content