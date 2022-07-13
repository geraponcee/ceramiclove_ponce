import Item from "./Item";

const ItemList = (props) => {
    return ( 
        <div>
            <h1>ItemList</h1>
            <div className="row">
                {
                    props.items.map(
                        item => <Item key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
}
 
export default ItemList;