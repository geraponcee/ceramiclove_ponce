import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const  onAddItem = (count) => {
        if (count > 1){
            alert(`${count} productos fueron añadidos al carrito!`);
        } else {
            alert(`${count} producto fue añadido al carrito!`);
        }};
    
    return ( 
        <div className="card container col" style={{ width: "50rem" }}>
            <div className="col text-center">
                <h2>{item.title}</h2>
            </div>
            <div className="row mb-2">
                <div className="col-md-5">
                    <img src={item.url} className="card-img-top"></img>
                </div>
                <div className="col-md-7">
                    <p>
                        <h4>Construcción:</h4>
                        <p>{item.description}</p>
                    </p>
                    <h4>Especificaciones:</h4>
                    <p>
                        <p>Altura: {item.heigth} cm</p>
                        <p>Anchura: {item.width} cm</p>
                        <p>Diámetro: {item.diameter} cm</p>
                        <p>
                            <h5 style={{textDecoration: "line-through", "color": "gray"}}>${(item.price + (item.discount/100 * item.price)).toFixed(0)}</h5>
                            <h2>Precio ${item.price}</h2>
                            <h4 style={{"color": "green"}}>{item.discount}% OFF</h4>
                        </p>
                    </p>
                    <div className="col">
                        <ItemCount stock={item.stock} initial={1} onAdd={onAddItem} />
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default ItemDetail;