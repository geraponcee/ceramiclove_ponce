import { useState ,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import Spinner from "react-bootstrap/esm/Spinner";

const ItemDetailContainer = () => {
    
    const params = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            setLoading(true);
            const db = getFirestore();
            const docRef = doc(db, "itemsdetailed", params.id);
            getDoc(docRef).then((snapshot) => { 
                const data = { id: snapshot.id, ...snapshot.data() }
                setItem(data);
                setLoading(false);
            })
            .catch((error) => {console.log(error);});
        },[]);
    
    return ( 
        <div className="container" style={{width: '400px'}}>
            <div style={{justifyContent: 'center', display: 'flex'}}>
                { loading ? <Spinner animation="border" role="status"/> : <ItemDetail item={item} /> }
            </div>
        </div>
    );

}
 
export default ItemDetailContainer;