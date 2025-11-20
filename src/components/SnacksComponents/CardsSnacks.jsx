import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";

const Cards = ({ stocks = [] ,increase ,decrease  }) => {
    
    const [category, setCategory] = useState("All");

    
    const showCards = stocks.filter(item => {
        if (category === "All") return true;
        return item.category === category;
    });
    
    return (
        <div>
        <div className="flex gap-4">
        
        <Button
            onClick={() => setCategory("All")}
            className={`border-2 border-black text-white ${
            category === "All" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
        All
        </Button>
    


        <Button
            onClick={() => setCategory("Snacks")}
            className={`border-2 border-black text-white ${
            category === "Snacks" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Snacks
        </Button>

        <Button
            onClick={() => setCategory("Drinks")}
            className={`border-2 border-black text-white ${
            category === "Drinks" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Drinks
        </Button>
    
        <Button
            onClick={() => setCategory("Food")}
            className={`border-2 border-black text-white ${
            category === "Food" ? "bg-[#FF0800] text-black" : "bg-gray-500"
            }`}
            size="sm"
        >
            Food
        </Button>
        </div>    

    <div className=" pt-16 grid grid-cols-3 gap-5 phone:grid-cols-1 justify-items-center tablet:grid-cols-2">
        {showCards.map(({id, name, description, price, image ,item ,category }) => (
        <div key={id}>
            <Card className="mt-6 w-96 bg-black transition ease-in-out delay-100 hover:-translate-y-3 duration-300 tablet:w-auto h-96 laptop:w-auto">
        <CardHeader color="blue-gray" className="relative h-56 ">
            
            <img className="transition ease-in-out duration-200 hover:scale-110 hover:brightness-75"
            src={image} 
            alt="card-image" 
            />
        </CardHeader>
        <CardBody className="flex flex-col gap-3 ">
            <div >
                <Typography variant="h5" color="white" className="mb-2 text-2xl " >
                <div className="flex justify-between">
                {name}
                <div className="bg-gray-500 w-14 text-center h-fit rounded text-sm mt-2  text-white">
                        {category}
                    </div>
                </div>
            </Typography>
            <Typography className="text-gray-400">
            {description}
            </Typography>
            </div>
            <p className="text-[#FF0800] text-2xl">${price}</p>
        </CardBody>
        <CardFooter className="pt-0 text-center " >
        <Button
    onClick={() => {
        if (item === 0) {
        increase(id);
        }
    }}
    className={`w-full transition duration-300 ${
        item > 0
        ? "bg-gray-500 text-black"
        : "bg-[#FF0800] text-white font-semibold"
    }`}
    >
    {item > 0 ? (
        <div className="flex justify-between items-center text-lg">
        <button onClick={() => decrease(id)}>-</button>
        <p>{item}</p>
        <button onClick={() => increase(id)}>+</button>
        </div>
    ) : (
        "+ Add To Cart"
    )}
</Button>

        </CardFooter>
        </Card>
        </div>
        ))}
    </div>
        </div>


    )
}

export default Cards