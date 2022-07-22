import Item from "./Item";

const ItemList = ({ items }) => {
    return ( 
        <div className="container">
            <div className="row">
                {
                    items.map((item) => (
                        <div key={item.id} className="col-sm">
                            <Item item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
 
export default ItemList;