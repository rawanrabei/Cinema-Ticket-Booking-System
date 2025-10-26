import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Buttons from "../../../components/Buttons";
import FrontPanel from "../../../components/FrontPanel";
import BottomPanel from "../../../components/BottomPanel";


export const Sweets = ({stocks}) => {
return (
    <div>
        <FrontPanel/>
    <div className="m-8">
        <div className="flex gap-4">
        <Buttons/>
        </div>    
    <div className=" pt-16 grid grid-cols-3 gap-5	">
        {stocks
        .filter((item) => item.id === 1 || item.id === 2 || item.id === 7) 
        .map(({ id, name, description, price, image }) => (
        <div key={id}>
            <Card className="mt-6 w-96 bg-black transition ease-in-out delay-100 hover:-translate-y-3 duration-300">
        <CardHeader color="blue-gray" className="relative h-56 ">
            <img className="transition ease-in-out duration-200 hover:scale-110 hover:brightness-75"
            src={`${image}`} 
            alt="card-image"
            />
        </CardHeader>
        <CardBody className="flex flex-col gap-3 ">
            <div >
                <Typography variant="h5" color="white" className="mb-2 text-2xl" >
            {name}
            </Typography>
            <Typography className="text-gray-400">
            {description}
            </Typography>
            </div>
            <p className="text-[#FF0800] text-2xl">{price}$</p>
        </CardBody>
        <CardFooter className="pt-0 text-center " >
            <Button className="w-full bg-[#FF0800]">+ Add To Cart</Button>
        </CardFooter>
        </Card>
        </div>
        ))}
    </div>
    <BottomPanel/>
    </div>
    </div>
    )
    

}

export default Sweets
