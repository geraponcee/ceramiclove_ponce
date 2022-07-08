import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
    return (
        <div>  
            <AiOutlineShoppingCart />
            <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-secondary">
                4
            </span>
        </div>
    );
}
 
export default CartWidget;