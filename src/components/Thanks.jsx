const Thanks = ({onClose}) => {
    return (
        <div className="bg-white md:w-[36%] mobile:w-[90%] text-center flex flex-col items-center p-10 md:px-10 mobile:px-5 h-fit rounded-lg">
            <img className=" w-20" src="/images/icon-check.svg"/>
            <br/>
            <h1 className="text-xl font-bold md:mb-3 mobile:mb-6">Thanks for your support!</h1>
            <p className=" text-dark-grey mb-10">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </p>
            <button onClick={(e) => {
                onClose()
            }} className="bg-moderate-cyan hover:bg-dark-cyan py-[15px] px-10 text-lg flex items-center rounded-full text-white font-semibold transition-colors">Got it!</button>
        </div>
    )
}

export default Thanks