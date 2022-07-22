import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import itemsData from "../data/itemsData";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";

const ItemListContainer = ({ greeting }) => {

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const promiseItems = new Promise((resolve, reject) => {
        setTimeout(
            () => {resolve(itemsData);},2000
        )
    });

    useEffect(() => {
            setLoading(true);
            promiseItems
            .then((response) => {
                if(id) {
                    setItems(response.filter((product) => product.category.id == id));
                } else {
                    setItems(response);
                }
            setLoading(false);
            })
            .catch((error) => {console.log(error);})
        }, [id]);

    if (loading) return <Spinner />;

    return (  
        <div className="container">
            <div>
                <ItemList items={items} />
            </div>
        </div>
    );
}
 
export default ItemListContainer;