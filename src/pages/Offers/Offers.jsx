import FrontPanelOffers from "../../components/OffersComponents/FrontPanelOffers"
import CardsOffers from './../../components/OffersComponents/CardsOffers';
import { SlPeople } from "react-icons/sl";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";


const Offers = () => {


  return (
    <div>
      <FrontPanelOffers/>
      <CardsOffers />
    </div>
  )
}

export default Offers
