import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola, soy la prop greeting de ItemListContainer."/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
