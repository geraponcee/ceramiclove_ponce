import React, { createContext, useState } from "react";

//Create a variable as context
//export default const CartContext ----> import as import CartContext ...
//export const CartContext ----> import as import { CartContext } ...
export const CartContext = createContext();

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    const addItem = (item, quantity) => {
        setCartItems((prevState) => [...prevState, item]);
        setCountItems(countItems + quantity);
    }

    const removeItem = (itemId) => {
        let newArray = cartItems.filter(
            (item) => {
                return item.id != itemId;
            } 
        );
        setCartItems(newArray);
        setCountItems(0);
        newArray.forEach((item) => {
            setCountItems(countItems + item.count);
        });
    }

    const clear = () => {
        setCartItems([]);
        setCountItems(0);
    }

    const isInCart = (id) => {
        return cartItems.find((item) => item.id === id) ? true : false;
    }

    return ( 
        <CartContext.Provider value={{cartItems, countItems, addItem, removeItem, clear, isInCart}}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;