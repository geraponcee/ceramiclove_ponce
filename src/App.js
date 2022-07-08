import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola, soy la prop greeting de ItemListContainer."/>
    </div>
  );
}

export default App;
