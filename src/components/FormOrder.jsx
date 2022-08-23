import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import FormData from "./FormData";
import Spinner from "react-bootstrap/esm/Spinner";

const FormOrder = ({totalPrice}) => {

    const context = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const inputs = document.getElementsByTagName("input");
        const data = Array.from(inputs).map((input, index) => input.value);
        if(data[1] === data[2]){
            context.insertOrder(totalPrice, {name: data[0], mail: data[1], phone: data[3]});
        } else {
            alert('Revise los mails ingresados, no coinciden.');
        }
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