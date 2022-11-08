import React from "react";
import "./App.css"
import Navbar from "./Componets/Navbar/Navbar"
import { ItemListContainer } from "./Containers/ItemListContainer/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const mensaje = "Buenas";

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<ItemListContainer />}/>
      </Routes>
     </BrowserRouter>
    </>
  );
};
export default App;
/*{show ? <ComponenteEstados /> : <h1>acano hay nada</h1>}
      <button onClick={alternar}>Alternar</button>*/