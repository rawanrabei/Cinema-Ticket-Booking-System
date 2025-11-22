
import { IoGiftOutline } from "react-icons/io5";



import React from 'react'

const FrontPanelOffers = () => {
    return (
        <div>
            <div className=" bg-gradient-to-t from-black to-gray-500 py-10 phone:w-auto tablet:w-auto laptop:w-fit">
            <div className="m-5 flex flex-col gap-5">
                    <h1 className="text-5xl ">
                    <IoGiftOutline 
                    className="inline-block text-[#FF0800] mr-5 mb-2 phone:text-4xl" />
                    Special <span className="text-[#FF0800]">Offers</span></h1>
                    <p className="text-gray-400 phone:w-96 laptop:w-screen">Save more on your movie experience with our exclusive deals and promotions. Limited time offers!</p>
            </div>
            </div>
        </div>
    )
}

export default FrontPanelOffers