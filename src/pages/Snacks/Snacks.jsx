import BottomPanel from "../../components/BottomPanel"
import Buttons from "../../components/Buttons"
import Cards from "../../components/Cards"
import FrontPanel from "../../components/FrontPanel"



const Snacks = ({stocks  ,increase ,decrease ,subtotal ,totalItems}) => {
  


  return (
    <div>
      <FrontPanel/>
      <div className=" m-8">
        <Buttons/>
        <Cards stocks={stocks} increase={increase} decrease={decrease} />
        <BottomPanel  subtotal={subtotal()} totalItems={totalItems()}/>
      </div>
    </div>
  )
}

export default Snacks
