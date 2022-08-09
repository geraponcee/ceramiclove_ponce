import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return ( 
        <div className="card container col shadow-sm" style={{ width: "15rem" }}>
            <h4 className="text-center">{item.title}</h4>
            <img src={item.url} className="card-img-top" style={{height: '190px'}}></img>
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-dark w-100 mb-2 mt-2" >Ver detalle</button>
            </Link>
        </div>
    );
}
 
export default Item;