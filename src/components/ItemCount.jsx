import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 0, onAdd }) => {

    const [count, setCount] = useState(initial);
    const [stockVariant, setStockVariant] = useState(stock - 1);

    const actionClick = (operation) => {
        if (operation === "+"){
            if(count < stock){
                setCount(count + 1);
                setStockVariant(stockVariant - 1);
            }
            return count;
        } else {
            if(count > 0){
                setCount(count - 1)
                setStockVariant(stockVariant + 1);
            }
            return count;
        }
    };

    return ( 
        <div className="row">
            <div className="col-12 text-center">
                <h5>{`Disponibles ${stockVariant}`}</h5>
            </div>
            <div className="input-group mb-2">
                <button className="btn btn-dark col-2 input-group-text" onClick={() => actionClick("-")}>-</button>
                <div className="form-control text-center col-8">{ count }</div>
                <button className="btn btn-dark col-2 input-group-text" onClick={() => actionClick("+")}>+</button>
            </div>
            <div className="input-group justify-content-center">
                <button className="btn btn-dark w-100" disabled={count === "" || count === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );

}
 
export default ItemCount;