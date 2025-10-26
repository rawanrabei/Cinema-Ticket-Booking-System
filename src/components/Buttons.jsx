import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const Buttons = () => {
    const location = useLocation();


    const activeButton = (() => {
        if (location.pathname === "/") return "All";
        if (location.pathname === "/Sweets") return "Snacks";
        if (location.pathname === "/Drinks") return "Drinks";
        if (location.pathname === "/Food") return "Food";
        return "";
    })();

    return (
        <div className="flex gap-4">
        <Link to="/">
        <Button
            className={`border-2 border-black text-white ${
            activeButton === "All" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
        All
        </Button>
        </Link>

        <Link to="/Sweets">
        <Button
            className={`border-2 border-black text-white ${
            activeButton === "Snacks" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Snacks
        </Button>
        </Link>


        <Link to="/Drinks">
        <Button
            className={`border-2 border-black text-white ${
            activeButton === "Drinks" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Drinks
        </Button>
        </Link>

        <Link to="/Food">
        <Button
            className={`border-2 border-black text-white ${
            activeButton === "Food" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Food
        </Button>
        </Link>
        </div>
    );
};

export default Buttons;
