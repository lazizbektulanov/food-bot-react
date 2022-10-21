import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import icecreamImg from "../images/icecream.png";
import icecream1Img from "../images/icecream1.png";
import kebabImg from "../images/kebab.png";
import pizzaImg from "../images/pizza.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import React, {useEffect} from 'react';

export function getData(){
    useEffect(()=>{
        fetch("https://c7ad-213-230-112-157.eu.ngrok.io/api/products")
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
                return result;
        }
        )
    },[]
    )
}

// export function getData(){
//     return ([
//         {title: "Burger", price: 17.99, Image: burgerImg, id: 1 },
//         {title: "Coca cola", price: 10.99, Image: cocaImg, id: 2 },
//         {title: "Ice cream", price: 15.99, Image: icecreamImg, id: 3 },
//         {title: "Ice cream 2", price: 16.99, Image: icecream1Img, id: 4 },
//         {title: "Kebab", price: 20.99, Image: kebabImg, id: 5 },
//         {title: "Pizza", price: 21.99, Image: pizzaImg, id: 6 },
//         {title: "Salad", price: 19.99, Image: saladImg, id: 7 },
//         {title: "Water", price: 9.99, Image: waterImg, id: 8 }
//     ]
//     )
// }