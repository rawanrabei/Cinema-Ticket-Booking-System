import { IoCopyOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { ButtonsOffers } from "../../../components/OffersComponents/ButtonsOffers";
import FrontPanelOffers from "../../../components/OffersComponents/FrontPanelOffers";



const General = () => {
    return (
        <div>
            <FrontPanelOffers/>
            <ButtonsOffers/>
            <div className="m-9 flex flex-col gap-6">
            <div className="flex gap-7 phone:flex-col tablet:flex-col laptop:flex-row">
                            <div className="transition ease-in-out delay-100 hover:-translate-y-3 duration-300 bg-black w-96  rounded-lg p-5  phone:w-80 tablet:w-auto laptop:w-96">
                                <div className= "flex  justify-between gap-5 ">
                                <div className="bg-[#FF0800] p-1 rounded-lg  ">
                                    <h1 className="text-white">40% COMBO</h1>
                                </div>
                                <div className="bg-[#460b09] rounded-full    ">
                                    <AiOutlinePercentage className="inline-block text-[#FF0800] m-2"/>
                                </div>
                                </div>
                                <div className="mt-6  flex flex-col gap-3 ">
                                <h1 className="text-white text-xl">Weekend Special</h1>
                                <p className="text-gray-400 ">Weekend shows - 2 tickets + 2 popcorns for $40</p>
                                </div>
                                <div className="flex  justify-between p-2 items-center mt-10  bg-gray-900 rounded-xl">
                                    <p className="text-white">WEEKEND40</p>
                                    <div>
                                    <button><IoCopyOutline className="inline-block hover:rounded text-white hover:bg-gray-800  hover:text-[#FF0800] w-7 h-7 p-1 "/></button>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <p className="text-gray-400 text-xs ms-2 flex"><BsStars />
                                    Valid until October 31, 2025</p>
                                </div>
                            </div>
            
                            <div className="transition ease-in-out delay-100 hover:-translate-y-3 duration-300 bg-black w-96  rounded-lg p-5  phone:w-80 tablet:w-auto laptop:w-96">
                                <div className= "flex  justify-between gap-5 ">
                                <div className="bg-[#FF0800] p-1 rounded-lg  ">
                                    <h1 className="text-white">65% BUNDLE</h1>
                                </div>
                                <div className="bg-[#460b09] rounded-full    ">
                                    <AiOutlinePercentage className="inline-block text-[#FF0800] m-2"/>
                                </div>
                                </div>
                                <div className="mt-6  flex flex-col gap-3 ">
                                <h1 className="text-white text-xl">Family Bundle</h1>
                                <p className="text-gray-400 ">4 tickets + 2 large popcorns + 4 drinks = $65</p>
                                </div>
                                <div className="flex  justify-between p-2 items-center mt-10  bg-gray-900 rounded-xl">
                                    <p className="text-white">FAMILY65</p>
                                    <div>
                                    <button><IoCopyOutline className="inline-block hover:rounded text-white hover:bg-gray-800  hover:text-[#FF0800] w-7 h-7 p-1 "/></button>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <p className="text-gray-400 text-xs ms-2 flex"><BsStars />
                                    Valid until October 31, 2025</p>
                                </div>
                            </div>
                            </div>
            </div>                
        </div>
    )
}

export default General