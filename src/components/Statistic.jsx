import { useMediaQuery } from "react-responsive";

const Statistic = ({pledge, backers}) => {
    const desktop = useMediaQuery({query: "(min-width: 768px)"})

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="bg-white font-commissioner md:p-14 mobile:p-10 mobile:px-8 rounded-md md:text-start mobile:text-center mb-5">
            <div className="flex md:flex-row mobile:flex-col justify-between items-center mb-8">
                <div className="w-[150px] md:mb-0 mobile:mb-5">
                    <p className="text-[32px] font-bold">${numberWithCommas(pledge)}</p>
                    <p className="text-dark-grey">of $100,000 backed</p>
                </div>
                <div className={`${desktop?"border-l-2 h-16":"border-t-2 w-24"} mb-5`}></div>
                <div className="w-[150px] md:mb-0 mobile:mb-5">
                    <p className="text-[32px] font-bold">{numberWithCommas(backers)}</p>
                    <p className="text-dark-grey">total backers</p>
                </div>
                <div className={`${desktop?"border-l-2 h-16":"border-t-2 w-24"} mb-5`}></div>
                <div className="w-[150px] md:mb-0 mobile:mb-5">
                    <p className="text-[32px] font-bold">56</p>
                    <p className="text-dark-grey">days left</p>
                </div>
            </div>
            <div className="relative">
                <div className="rounded-full w-[100%] h-3 bg-dark-grey/20"></div>
                <div style={{width: `${pledge/1000}%`}} className={`rounded-full absolute top-0 h-3 bg-moderate-cyan`}></div>
            </div>
        </div>
    )
}

export default Statistic