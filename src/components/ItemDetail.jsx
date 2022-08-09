import ItemCount from "./ItemCount";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

const ItemDetail = ({item}) => {

    const context = useContext(CartContext);
    const [count, setCount] = useState(0);
    
    const  onAddItem = (count) => {
        if(!context.isInCart(item.id)){
            if(context.idOrder){
                context.setIdOrder(null);
                context.clear();
            }
            putInCart(count);
        }else{
            if(context.idOrder){
                context.setIdOrder(null);
                context.clear();
                putInCart(count);
            }else{
                alert('Ya existe el item');
            }
        }
    };

    const putInCart = (count) => {
        setCount(count);
        item = {
            'id': item.id,
            'count': count,
            'title': item.title,
            'price': item.price,
            'url': item.url,
            'subtotal': parseInt(count) * parseInt(item.price)
        }
        context.addItem(item, count);
    }
    
    return ( 
        <MDBCard className="shadow-sm">
            <MDBCardImage position='top' src={item.url} />
            <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                    {item.description}
                </MDBCardText>
            </MDBCardBody>
            <MDBListGroup flush>
                <MDBListGroupItem style={{display: 'grid'}}>
                    <MDBCardTitle>Especificaciones:</MDBCardTitle>
                    <span>Altura: {item.heigth} cm</span>
                    <span>Anchura: {item.width} cm</span>
                    <span>Diámetro: {item.diameter} cm</span>
                    <h4>
                        <span style={{textDecoration: "line-through", "color": "gray", marginRight: "10px"}}>
                            Precio ${(item.price + (item.discount/100 * item.price)).toFixed(0)}
                        </span>
                        <span style={{"color": "green"}}>
                            {item.discount}% OFF
                        </span>
                    </h4>
                    <h2 className="text-center">Precio final por unidad ${item.price}</h2>
                </MDBListGroupItem>
                <MDBListGroupItem>
                    {count == 0 ? 
                        (item.stock < 1 ? <h3 className="text-center" style={{color: "red"}}>¡Sin stock!</h3> : <ItemCount stock={item.stock} initial={1} onAdd={onAddItem} />):
                        (<div>
                            <h3 className="text-center">{count > 1 ? `${count} productos agregados` : `${count} producto agregado`}</h3>
                            <Link to="/cart/"><button className="btn btn-dark w-100">Terminar compra</button></Link>
                        </div>)
                    }
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBCard>
    );
}
 
export default ItemDetail;