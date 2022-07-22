import { useState ,useEffect } from "react";
import itemsDetailData from "../data/itemsDetailData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const params = useParams();
    const [item, setItem] = useState({});

    const getItem = (response) => {
        response = response.filter((element) => element.id == params.id);
        return response
    };

    useEffect(
        () => {

            const promiseItem = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(getItem(itemsDetailData));
                    },0)
            });
        
            promiseItem
            .then((response) => {
                setItem(response[0]);})
            .catch((error) => {console.log(error);})
        },
        []
    );
    
    return ( 
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );

}
 
export default ItemDetailContainer;