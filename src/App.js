import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola, soy la prop greeting de ItemListContainer."/>
    </div>
  );
}

export default App;
