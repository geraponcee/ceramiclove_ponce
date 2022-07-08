import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
    
    const  onAddItem = (count) => {
        if (count > 1){
            alert(`${count} productos fueron añadidos al carrito!`);
        } else {
            alert(`${count} producto fue añadido al carrito!`);
        }
    }

    return (  
        <div className="container">
            <h2>{ greeting }</h2>
            <div className="row">
                <ItemCount stock={5} initial={1} onAdd={onAddItem} />
                <ItemCount stock={3} initial={1} onAdd={onAddItem} />
                <ItemCount stock={10} initial={1} onAdd={onAddItem} />
            </div>
        </div>
    );
}
 
export default ItemListContainer;