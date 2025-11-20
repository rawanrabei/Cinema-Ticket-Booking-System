import { Button } from "@material-tailwind/react";
import { FaCartShopping } from "react-icons/fa6";


const BottomPanel = ({subtotal, totalItems}) => {
    return (
    <div className="bg-black rounded-lg p-3 mt-10 flex justify-between">
        <div>
            <p className="text-gray-400">Total</p>
            <p className="text-[#FF0800] text-xl">${subtotal}</p>

        </div>
        <div className="flex gap-5 p-3">
            <Button variant="filled">Skip</Button>
            <Button className="bg-[#FF0800] ">
            <FaCartShopping className="inline-block mr-3 text-sm" />
            Continue ({totalItems})
            </Button>
        </div>
    </div>
    )
}

export default BottomPanel