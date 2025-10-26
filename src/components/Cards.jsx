import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const Cards = ({ stocks = [] ,increase ,decrease  }) => {

    return (
    <div className=" pt-16 grid grid-cols-3 gap-5">
        {stocks.map(({id, name, description, price, image ,item }) => (
        <div key={id}>
            <Card className="mt-6 w-96 bg-black transition ease-in-out delay-100 hover:-translate-y-3 duration-300">
        <CardHeader color="blue-gray" className="relative h-56 ">
            <img className="transition ease-in-out duration-200 hover:scale-110 hover:brightness-75"
            src={image} 
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
    )
}

export default Cards