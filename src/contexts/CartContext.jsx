import React, { createContext, useState } from "react";
import { getFirestore, collection, addDoc, getDoc, doc, writeBatch } from "firebase/firestore";
import moment from "moment";
//Create a variable as context
//export default const CartContext ----> import as import CartContext ...
//export const CartContext ----> import as import { CartContext } ...
export const CartContext = createContext();

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [idOrder, setIdOrder] = useState(null);
    const [loading, setLoading] = useState(false);

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
        let newCount = 0;
        newArray.forEach((item) => {
            newCount += item.count;
        });
        setCountItems(newCount);
    }

    const clear = () => {
        setCartItems([]);
        setCountItems(0);
    }

    const isInCart = (id) => {
        return cartItems.find((item) => item.id === id) ? true : false;
    }

    const insertOrder = (totalPrice, buyerData) => {
        setLoading(true);
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const order = {
            buyer: buyerData,
            items: cartItems,
            date: moment().format("D/M/Y HH:mm"),
            total: totalPrice,
        }
        addDoc(ordersCollection, order)
            .then((response) => {
                setIdOrder(response.id);
                updateStock();
                setCountItems(0);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));
        
    }

    const updateStock = () => {
        const db = getFirestore();
        const batch = writeBatch(db);
        cartItems.map((item) => {
            const docStockRef = doc(db, "itemsdetailed", item.id);
            getDoc(docStockRef).then((snapshot) => { 
                const stock = snapshot.data().stock;
                if(stock >= item.count){
                    const docRef = doc(db, "itemsdetailed", item.id);
                    batch.update(docRef, {stock: stock - item.count});
                    batch.commit();
                }else{
                    console.log('Error al descontar stock');
                }
            })
            
        });
    }

    return ( 
        <CartContext.Provider value={{cartItems, countItems, idOrder, loading, addItem, removeItem, clear, isInCart, insertOrder, setIdOrder}}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;