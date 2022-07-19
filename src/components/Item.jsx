const Item = (props) => {
    return ( 
        <div className="card col shadow-sm">
            <h4>{props.item.title}</h4>
            <img src={props.item.url} className="card-img-top"></img>
            <button className="btn btn-dark w-100" onClick={() => alert("Proximamente..")}>Ver detalle del producto</button>
            <p className="text-center">Stock disponible: {props.item.stock}</p>
        </div>
    );
}
 
export default Item;