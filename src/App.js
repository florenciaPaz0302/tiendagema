import React from "react";
import "./App.css"
import Navbar from "./Componets/Navbar/Navbar"
import { ItemListContainer } from "./Containers/ItemListContainer/itemListContainer/ItemListContainer";



const App = () => {
  const mensaje = "hola a todos"

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
      </>
  );
};
export default App;
/*{show ? <ComponenteEstados /> : <h1>acano hay nada</h1>}
      <button onClick={alternar}>Alternar</button>*/