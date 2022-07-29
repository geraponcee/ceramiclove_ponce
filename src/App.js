import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./contexts/CartContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [cantItems, setCantItems] = useState(0);

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<ItemListContainer greeting="Hola, soy la prop greeting de ItemListContainer."/>}></Route>
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route
              path="*"
              element={
                <div className="text-center"><h1>ERROR 404 NOT FOUND</h1></div>
              }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;