import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import OrderSuccess from "./OrderSuccess";
import "../css/cart.css";
import ModalOrder from "./ModalOrder";
import { TrashFill } from "react-bootstrap-icons";
import Spinner from "react-bootstrap/esm/Spinner";

const Cart = () => {
    
    const context = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        let total = 0;
        context.cartItems.forEach(item => {
            total += parseInt(item.subtotal);
        });
        setTotalPrice(total);
        setLoading(false);
    }, [context.cartItems]);

    return ( 
        <div className="container" style={{justifyContent: 'center', display: 'flex'}}>
            { 
                loading ? 
                <Spinner animation="border" role="status"/> : 
                <div className="col-md-4">
                    <ul className="list-group">
                        {context.cartItems.map((item) => (
                            <li className="row mb-3" key={item.id}>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <h3 className="card-title">{item.title}</h3>
                                        <div className="card-text" style={{display: "flex", marginBottom: "20px"}}>
                                            <div className="col-4" style={{margin: "8px"}}>
                                                <img src={item.url} style={{maxWidth: '110px'}}></img>
                                            </div>
                                            <div className="col-8" style={{display: "grid", padding: "10px 15px"}}>
                                                <span>{`Cantidad: ${item.count}`}</span>
                                                <span>{`Precio unitario: $${item.price}`}</span>
                                                <span style={{fontWeight: 'bold'}}>{`Subtotal: $${item.subtotal}`}</span>
                                            </div>
                                        </div>
                                        {context.idOrder ?
                                            <></> :
                                            <button className="btn btn-danger offset-md-5" onClick={() => context.removeItem(item.id)}>
                                                <TrashFill/>
                                                <span> Quitar</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="list-group">
                        <li className="row text-center">
                            
                                {context.idOrder ? 
                                    <OrderSuccess idOrder={context.idOrder}/> :
                                    <></>
                                 } 
                                {context.countItems > 0 ?
                                    <div className="container card shadow-sm" style={{padding: "40px"}}>
                                        <h1>{`Total $${totalPrice}`}</h1>
                                        <ModalOrder totalPrice={totalPrice}/>
                                        <button className="btn btn-danger mt-2" onClick={() => context.clear()}>Limpiar carrito</button>
                                    </div>
                                    :
                                    context.idOrder ? <></> :
                                    <div>
                                        <h1>Carrito vacío</h1>
                                        <Link to="/"><button className="btn btn-dark">Comprar algo</button></Link>
                                    </div>
                                }
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}
 
export default Cart;