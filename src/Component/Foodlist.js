import bread from "../image/Bread.png"
import milk from "../image/milk.png"
import cheese from "../image/Cheese.jpg"
import soup from "../image/Soup.jpg"
import butter from "../image/Butter.png"

export let Foodlist = [{
        id: 1,
        name: "Bread",
        price: 1.10,
        image: bread,
        qty: 0,
        offer_name: "Buy a Soup and get Bread in half price..!"
    },
    {
        id: 2,
        name: "Milk",
        price: 0.5,
        image: milk,
        qty: 0,
    },
    {
        id: 3,
        name: "Cheese",
        price: 0.90,
        image: cheese,
        qty: 0,
        offer_name: "Buy one Cheese get one free..!"
    },
    {
        id: 4,
        name: "Soup",
        price: 0.6,
        image: soup,
        qty: 0,
    },
    {
        id: 5,
        name: "Butter",
        price: 1.20,
        image: butter,
        qty: 0,
        offer_name: "Get Butter in 1/3 price..!"

    },
    // {Add item}
    {
        totel_price: 0,
        discount: 0,
        totel: 0,
    },
]