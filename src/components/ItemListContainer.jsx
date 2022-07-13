import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import itemsData from "../data/itemsData";

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);

    const  onAddItem = (count) => {
        if (count > 1){
            alert(`${count} productos fueron añadidos al carrito!`);
        } else {
            alert(`${count} producto fue añadido al carrito!`);
        }
    };

    useEffect(
        () => {

            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(itemsData);
                    },
                    2000
                )
            });
        
            promiseItems
            .then((request) => {setItems(itemsData);})
            .catch((error) => {console.log(error);})
        
        },
        []
    );

    

    return (  
        <div className="container">
            <h2>{ greeting }</h2>
            <div className="row">
                <ItemCount stock={5} initial={1} onAdd={onAddItem} />
                <ItemCount stock={3} initial={1} onAdd={onAddItem} />
                <ItemCount stock={10} initial={1} onAdd={onAddItem} />
            </div>
            <div>
                <ItemList items={items} />
            </div>
        </div>
    );
}
 
export default ItemListContainer;