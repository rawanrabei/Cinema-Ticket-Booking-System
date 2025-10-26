
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";
import Snacks from "./pages/Snacks/Snacks";
import {Route, Routes } from "react-router-dom";
import Sweets from "./pages/Snacks/Sweets/Sweets";
import Food from "./pages/Snacks/Food/Food";
import Drinks from "./pages/Snacks/Drinks/Drinks";
import { useState } from "react"




const App = () => {

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
        category: "Food",
        name: "Classic Popcorn",
        description: "Freshly popped butter popcorn",
        price: 8,
        image: "../../../public/movie-theatre-popcorn.png",
        item: 0,
        },
        {
        id: 2,
        category: "Sweets",
        name: "Salted Caramel Popcorn",
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
        name: "Frozen Raspberry Lemonade",
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
        category: "Sweets",
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
    <>
      <Header />
      <AppRoutes />
      

      <Routes>
      <Route path="/" element={<Snacks stocks={stocks} increase={increase} decrease={decrease}  subtotal={subtotal} totalItems={totalItems}/>}/>
      <Route path="/Sweets" element={<Sweets stocks={stocks}/>}/>
      <Route path="/Food" element={<Food stocks={stocks}/>}/>
      <Route path="/Drinks" element={<Drinks stocks={stocks} />}/>
      </Routes>
  
      <Footer />
    </>
  );
};

export default App;
