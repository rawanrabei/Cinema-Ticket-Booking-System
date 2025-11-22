import BottomPanel from "../../components/SnacksComponents/BottomPanelSnacks"
import Cards from "../../components/SnacksComponents/CardsSnacks"
import FrontPanel from "../../components/SnacksComponents/FrontPanelSnacks"
import { useState } from "react"


const Snacks = () => {
  
    const increase = (id) => {
    const result = stocks.map((obj) =>
      obj.id === id ? { ...obj, item: (obj.item || 0) + 1 } : obj
    );
    setStocks(result);
  };
  
  const decrease = (id) => {
    const result = stocks.map((obj) =>
      obj.id === id ? { ...obj, item: obj.item > 0 ? obj.item - 1 : 0 } : obj
    );
    setStocks(result);
  };
  
  const subtotal = () => {
    let sum = 0;
    for (const obj of stocks) {
      const itemCount = obj.item || 0;
      sum += obj.price * itemCount;
    }
    return sum;
  };
  
  const totalItems = () => {
    let total = 0;
    for (const obj of stocks) {
      total += obj.item;
    }
    return total;
  };

  
    const [stocks , setStocks ] = useState([
    {
        id: 1,
        category: "Snacks",
        name: "Classic Popcorn",
        description: "Freshly popped butter popcorn",
        price: 8,
        image: "../../../public/movie-theatre-popcorn.jpg",
        item: 0,
        },
        {
        id: 2,
        category: "Snacks",
        name: "Caramel Popcorn",
        description: "Freshly Salted Caramel popped popcorn",
        price: 10,
        image: "/img_5412.jpg",
        item: 0,
        },
        {
        id: 3,
        category: "Drinks",
        name: "Coke",
        description: "Refreshing cold Coke",
        price: 5,
        image: "/drink-less-soda.jpg",
        item: 0,
        },
        {
        id: 4,
        category: "Food",
        name: "Grand Nachos",
        description: "Crispy, cheesy nacho during the next film",
        price: 15,
        image: "/20210224_Talabat_UAE_637505504022079539.jpg",
        item: 0,
        },
        {
        id: 5,
        category: "Drinks",
        name: "Raspberry Lemonade",
        description: "Refreshing blend of lemon, raspberries and ice",
        price: 10,
        image: "/frozen-raspberry-lemonade-2.jpg",
        item: 0,
        },
        {
        id: 6,
        category: "Food",
        name: "French Fries",
        description: "Crispy, perfectly salted french fries",
        price: 8,
        image: "/Ninja-Foodi-French-Fries7.jpg",
        item: 0,
        },
        {
        id: 7,
        category: "Snacks",
        name: "Chocolate Ice Cream",
        description: "Rich cocoa powder and a hint of vanilla",
        price: 5,
        image: "/recipe-for-honey-chocolate-ice-cream.jpg",
        item: 0,
        },
        {
        id: 8,
        category: "Food",
        name: "Sandwiches",
        description: "Baguette with ham, tomatoes and lettuce",
        price: 20,
        image: "/kanapki.jpg",
        item: 0,
        },
    ]);


  return (
    <div>
      <FrontPanel/>
      <div className=" m-8">
        <Cards stocks={stocks} increase={increase} decrease={decrease}  subtotal={subtotal} totalItems={totalItems} />
        <BottomPanel subtotal={subtotal()} totalItems={totalItems()} />
      </div>
    </div>
  )
}

export default Snacks
