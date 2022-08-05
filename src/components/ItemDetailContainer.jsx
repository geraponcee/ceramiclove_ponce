import { useState ,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const params = useParams();
    const [item, setItem] = useState({});

    useEffect(
        () => {

            const db = getFirestore();
            const docRef = doc(db, "itemsdetailed", params.id);
            getDoc(docRef).then((snapshot) => { 
                const data = { id: snapshot.id, ...snapshot.data() }
                setItem(data);
            })
            .catch((error) => {console.log(error);});

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