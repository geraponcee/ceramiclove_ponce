import { useState ,useEffect } from "react";
import itemsDetailData from "../data/itemsDetailData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const id = 1;
    
    const [item, setItem] = useState([]);

    const getItem = (response) => {
        response = response.filter((element) => element.id == id);
        return response
    };

    useEffect(
        () => {

            let promiseItem = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(itemsDetailData);
                    },
                    2000
                )
            });
        
            promiseItem
            .then((response) => {setItem(getItem(response));})
            .catch((error) => {console.log(error);})
        
        },
        []
    );
    
    return ( 
        <div className="container card">
            {
                item.map(
                    item => <ItemDetail key={item.id} item={item} />
                )
            }
        </div>
    );

}
 
export default ItemDetailContainer;