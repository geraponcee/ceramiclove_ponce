import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import FormData from "./FormData";
import OrderSuccess from "./OrderSuccess";
import Spinner from "react-bootstrap/esm/Spinner";

const FormOrder = ({totalPrice}) => {

    const context = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        context.insertOrder(totalPrice, {name: data[0], mail: data[1], phone: data[2]});
    }

    return (
        <div className="container">
            {
                context.loading ? 
                (<div style={{justifyContent: 'center', display: 'flex'}}><Spinner animation="border" role="status"/></div>) :
                (<FormData handleSubmit={handleSubmit}/>)
            }
        </div>
    );
}
 
export default FormOrder;