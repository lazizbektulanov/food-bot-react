import { useState, useEffect} from "react";

import "./App.css";
import Card from "./Components/Card/Card"
import Cart from "./Components/Cart/Cart"
// const { getData } = require('./db/db');
// const foods = getData();

const telegram = window.Telegram.WebApp;
const url = `http://localhost:8080/api/products`;


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    telegram.ready();
    fetch(url)
      .then((response) => response.json())
      .then((actualData) => setFoods(actualData.data))
      .catch((err) => {
        console.log(err.message);
      });
    console.log('render');
  },[])

  const onCheckout = () => {
    telegram.MainButton.text = "Pay bistro";
    telegram.MainButton.show();
  }

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(cartItems.map((x) =>
        x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }])
    }
  }

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(x =>
        x.id !== food.id
      )
      )
    } else {
      setCartItems(cartItems.map(x =>
        x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
      ))
    }
  }

  return (
    <>
      <h1 className="heading">Order food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map(food => {
          return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        })}
      </div>
    </>
  );
}

export default App;
