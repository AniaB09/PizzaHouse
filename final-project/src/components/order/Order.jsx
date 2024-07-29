import React, {useState} from "react";
import Products from "./products/Products.jsx";
import {supabase} from "../../supabase.js";
import Cart from "./cart/Cart.jsx";

function Order() {

    const [cart, setCart] = useState({});

    const [products] = useState([
        {id: 1, name: 'Pepperoni', description: 'sos pomidorowy, mozzarella, pepperoni', price: 32, img: 'https://st3.depositphotos.com/4590583/35023/i/600/depositphotos_350237494-stock-photo-traditional-pepperoni-pizza-cheese-top.jpg'},
        {id: 2, name: 'Prosciutto', description: 'sos pomidorowy, prosciutto, rukola', price: 34, img: 'https://st3.depositphotos.com/4590583/31956/i/600/depositphotos_319563450-stock-photo-pizza-prosciutto-cheese-top-view.jpg'},
        {id: 3, name: 'Formaggio', description: 'mozzarella, parmezan, ricotta, ser pleśniowy', price: 28, img: 'https://st4.depositphotos.com/4590583/22051/i/600/depositphotos_220514742-stock-photo-pizza-cheese-italian-traditional-dish.jpg'},
        {id: 4, name: 'Carbonara', description: 'sos serowy, mozzarella, boczek', price: 32, img: 'https://st3.depositphotos.com/4590583/35022/i/600/depositphotos_350226588-stock-photo-delicious-pizza-bacon-onions-top.jpg'},
        {id: 5, name: 'Caesar', description: 'sos pomidorowy, pierś kurczaka, pomidor, sałata', price: 34, img: 'https://st3.depositphotos.com/4590583/35022/i/600/depositphotos_350222628-stock-photo-pizza-caesar-pizza-chicken-cheese.jpg'},
        {id: 6, name: 'Funghi', description: 'sos serowy, pieczarki, mozzarella', price: 28, img: 'https://st3.depositphotos.com/4590583/35024/i/600/depositphotos_350241780-stock-photo-delicious-cheese-pizza-traditional-italian.jpg'},
        {id: 7, name: 'Pollo', description: 'sos serowy, kurczak, ananas', price: 34, img: 'https://st3.depositphotos.com/4590583/35021/i/600/depositphotos_350219530-stock-photo-pizza-chicken-cheese-mustard-top.jpg'},
        {id: 8, name: 'Tonno', description: 'sos pomidorowy, tuńczyk, cebula, kapary', price: 36, img: 'https://st4.depositphotos.com/4590583/22051/i/600/depositphotos_220514252-stock-photo-pizza-tuna-onion-italian-traditional.jpg'},
        {id: 9, name: 'Frutti di Mare', description: 'sos pomidorowy, mozzarella, owoce morza, oliwki', price: 42, img: 'https://st4.depositphotos.com/4590583/21796/i/600/depositphotos_217961370-stock-photo-seafood-pizza-italian-cuisine-wooden.jpg'},
        {id: 10, name: 'Carne', description: 'sos pomidorowy, mozzarella, boczek, salami', price: 36, img: 'https://st3.depositphotos.com/4590583/35023/i/600/depositphotos_350230530-stock-photo-pizza-salami-bacon-old-table.jpg'},
        {id: 11, name: 'Oliwa czosnkowa', description: '30 ml', price: 8, img: 'https://st4.depositphotos.com/13349494/24312/i/600/depositphotos_243120852-stock-photo-oil-bottle-olive-tree-leaves.jpg'},
        {id: 12, name: 'Oliwa chili', description: '30 ml', price: 8, img: 'https://st4.depositphotos.com/13349494/24312/i/600/depositphotos_243120852-stock-photo-oil-bottle-olive-tree-leaves.jpg'},
        {id: 13, name: 'Pepsi', description: '750 ml', price: 9, img: 'https://st.depositphotos.com/1044737/51700/i/600/depositphotos_517007522-stock-photo-stuttgart-germany-august-2021-pepsi.jpg'},
        {id: 14, name: 'Sprite', description: '750 ml', price: 9, img: 'https://st.depositphotos.com/1044737/51700/i/600/depositphotos_517007216-stock-photo-stuttgart-germany-august-2021-sprite.jpg'},
        {id: 15, name: 'Cola', description: '750 ml', price: 9, img: 'https://st.depositphotos.com/1044737/51700/i/600/depositphotos_517007134-stock-photo-stuttgart-germany-august-2021-coca.jpg'},
        {id: 16, name: 'Fanta', description: '750 ml', price: 9, img: 'https://st.depositphotos.com/1044737/51700/i/600/depositphotos_517007078-stock-photo-stuttgart-germany-august-2021-fanta.jpg'}
    ]);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    };

    const placeOrder = async (orderItems) => {
        const {data, error} = await supabase
            .from('products')
            .insert(orderItems);

        if (error) {
            console.error(error);
            return;
        }

        console.log(data);
    };

    return (
        <section className='order col-md-12 d-flex flex-row flex-wrap'>
            <Products products={products} cart={cart} updateCart={updateCart}/>
            <Cart cart={cart} updateCart={updateCart} placeOrder={placeOrder}/>
        </section>
    )
}

export default Order;
