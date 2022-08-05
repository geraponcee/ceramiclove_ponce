import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            if(id){
                const itemsFiltered = query(
                    itemsCollection, 
                    where("category_id", "==", parseInt(id))
                );
                getDocs(itemsFiltered)
                .then((snapshot) => {
                    const data = snapshot.docs.map((doc) => (
                        {id: doc.id, ...doc.data()}
                    ));
                    setItems(data);
                    setLoading(false);
                })
                .catch((error) => {console.log(error);});
            }else{
                getDocs(itemsCollection)
                .then((snapshot) => {
                    const data = snapshot.docs.map((doc) => (
                        {id: doc.id, ...doc.data()}
                    ));
                    setItems(data);
                    setLoading(false);
                })
                .catch((error) => {console.log(error);});
            }
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