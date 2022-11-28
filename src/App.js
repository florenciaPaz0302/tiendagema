import React from "react";
import "./App.css"
import Navbar from "./Componets/Navbar/Navbar"
import { ItemListContainer } from "./Containers/ItemListContainer/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext";
import CheckOut from "./Containers/CheckOut/CheckOut"




const App = () => {
  const mensaje = "Productos en Tienda Gema";

  return (
     <BrowserRouter>
      <CustomProvider>
       <Navbar />
        <Routes>
         <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
         <Route 
           path="/categoria/:id"
           element={<ItemListContainer greeting={mensaje} />}
         />
         <Route path="/producto/:id" element={<ItemDetailContainer />}/>
         <Route path="/cart" element={<Cart />}/>
         <Route path='/CheckOut' element={<CheckOut/>}/>
         <Route path="*" element={<ItemListContainer />}/>
        </Routes>
      </CustomProvider>
     </BrowserRouter>
    
  );
};
export default App;
