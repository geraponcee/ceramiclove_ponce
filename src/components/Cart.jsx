import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../css/cart.css"

const Cart = () => {
    
    const context = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        context.cartItems.forEach(item => {
            total += parseInt(item.subtotal);
        });
        setTotalPrice(total);
    }, [context.cartItems]);

    return ( 
        <div className="container">
            <ul className="list-group">
                {context.cartItems.map((item) => (
                    <div className="row mb-3" key={item.id}>
                        <div className="col-md-11">
                            <li><h3>{item.title}</h3></li>
                            <li>{`Cantidad: ${item.count}`}</li>
                            <li>{`Precio unitario: $${item.price}`}</li>
                            <li style={{fontWeight: 'bold'}}>{`Subtotal: $${item.subtotal}`}</li>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-dark" onClick={() => context.removeItem(item.id)}>X</button>
                        </div>
                    </div>
                ))}
                <li className="row text-center">
                    {context.countItems > 0 ?
                        (   <>
                                <h1>{`Total $${totalPrice}`}</h1>
                                <button className="btn btn-dark" onClick={() => context.clear()}>Limpiar carrito</button>
                            </>
                        ) : (
                            <>
                                <h1>Carrito vacío</h1>
                                <Link to="/"><button className="btn btn-dark">Comprar algo</button></Link>
                            </>
                        )
                    }
                </li>
            </ul>
        </div>
    );
}
 
export default Cart;