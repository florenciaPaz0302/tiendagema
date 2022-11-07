import React from "react";
import "./App.css"
import Navbar from "./Componets/Navbar/Navbar"
import { ItemListContainer } from "./Containers/ItemListContainer/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Router, Route } from "react-router-dom";


const App = () => {
  const mensaje = "hola a todos"

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
      <ItemDetailContainer />
      </BrowserRouter>
      </>
  );
};
export default App;
/*{show ? <ComponenteEstados /> : <h1>acano hay nada</h1>}
      <button onClick={alternar}>Alternar</button>*/