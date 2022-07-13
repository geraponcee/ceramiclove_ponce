import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 0, onAdd }) => {

    const [count, setCount] = useState(initial);

    const actionClick = (operation) => {
        if (operation === "+"){
            return (count < stock) ? setCount(count + 1) : count;
        } else {
            return (count > 0) ? setCount(count - 1) : count;
        }
    };

    return ( 
        <div className="card col-md-4 col-sm-12 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Producto X</h5>
                <div className="input-group mb-2">
                    <button className="btn btn-dark col-2 input-group-text" onClick={() => actionClick("-")}>-</button>
                    <div className="form-control text-center col-8">{ count }</div>
                    <button className="btn btn-dark col-2 input-group-text" onClick={() => actionClick("+")}>+</button>
                </div>
                <div className="input-group justify-content-center">
                    <button className="btn btn-dark w-100" disabled={count === "" || count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );

}
 
export default ItemCount;