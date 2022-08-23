import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {

    const context = useContext(CartContext);

    return (
        <div>  
            <AiOutlineShoppingCart />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-secondary">
                <span>{`${context.countItems}`}</span>
            </span>
        </div>
    );
}
 
export default CartWidget;