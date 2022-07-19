const ItemDetail = (props) => {
    return ( 
        <div className="row col">
            <div className="col-md-12 text-center">
                <h2>{props.item.title}</h2>
            </div>
            <div className="col-md-4">
                <img src={props.item.url} className="card-img-top"></img>
            </div>
            <div className="col-md-8">
                <p>
                    <h4>Construcción:</h4>
                    <p>{props.item.description}</p>
                </p>
                <p>
                    <h4>Especificaciones:</h4>
                    <p>Altura: {props.item.dimensions.heigth}</p>
                    <p>Anchura: {props.item.dimensions.width}</p>
                    <p>Diámetro: {props.item.dimensions.diameter}</p>
                    <p>
                        <h5 style={{"text-decoration": "line-through", "color": "gray"}}>${(props.item.price + (props.item.discount/100 * props.item.price)).toFixed(0)}</h5>
                        <h2>Precio ${props.item.price}</h2>
                        <h4 style={{"color": "green"}}>{props.item.discount}% OFF</h4>
                    </p>
                </p>
            </div>
            
        </div>

    );
}
 
export default ItemDetail;