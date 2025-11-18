import { CiForkAndKnife } from "react-icons/ci";

const FrontPanel = () => {
    return (
    <div>
        <div className="bg-gradient-to-t from-black to-gray-500 py-10 tablet:w-auto">
            <div className="m-5 flex flex-col gap-5">
            <h1 className="text-5xl ">
            <CiForkAndKnife className="inline-block text-[#FF0800] mr-5 mb-2" />
            Food & <span className="text-[#FF0800]">Drinks</span></h1>
            <p className="text-gray-400">Enhance Your Movie Experience With Delicious Snacks And Refreshing Beverages</p>
            </div>
        </div>
    </div>
    )
}

export default FrontPanel