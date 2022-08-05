import ItemCount from "./ItemCount";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({item}) => {

    const context = useContext(CartContext);
    const [count, setCount] = useState(0);
    
    const  onAddItem = (count) => {
        if(!context.isInCart(item.id)){
            setCount(count);
            item = {
                'id': item.id,
                'count': count,
                'title': item.title,
                'price': item.price,
                'subtotal': parseInt(count) * parseInt(item.price)
            }
            context.addItem(item, count);
        }else{
            alert('Ya existe el item');
        }
    };
    
    return ( 
        <div className="card container col" style={{ width: "50rem" }}>
            <div className="col text-center">
                <h2>{item.title}</h2>
            </div>
            <div className="row mb-2">
                <div className="col-md-5">
                    <img src={item.url} className="card-img-top"></img>
                </div>
                <div className="col-md-7">
                    <p>
                        <h4>Construcción:</h4>
                        <p>{item.description}</p>
                    </p>
                    <h4>Especificaciones:</h4>
                    <p>
                        <p>Altura: {item.heigth} cm</p>
                        <p>Anchura: {item.width} cm</p>
                        <p>Diámetro: {item.diameter} cm</p>
                        <p>
                            <h5 style={{textDecoration: "line-through", "color": "gray"}}>${(item.price + (item.discount/100 * item.price)).toFixed(0)}</h5>
                            <h2>Precio ${item.price}</h2>
                            <h4 style={{"color": "green"}}>{item.discount}% OFF</h4>
                        </p>
                    </p>
                    <div className="col">
                        {count == 0 ? 
                            (
                                <ItemCount stock={item.stock} initial={1} onAdd={onAddItem} />
                            ) : (
                                <div>
                                    <h3>{count} productos fueron agregados</h3>
                                    <Link to="/cart/"><button className="btn btn-dark w-100">Terminar mi compra</button></Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default ItemDetail;