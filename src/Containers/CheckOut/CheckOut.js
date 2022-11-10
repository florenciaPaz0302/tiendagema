import React, { useContext, useState } from "react";
import { Context } from "../../Context/CustomContext";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom";


const CheckOut = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const { cart, total, clear } = useContext(Context);

    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) =>{
        e.preventDefault()
            const ventas = collection(db,"ventas")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: total(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
    }
  return (
    <div>
    {!orderId 
    ?<div>
    <h2>Checkout</h2>
     <h4>Por favor complete todos los campos</h4>
     <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
         <div >
             <label >Nombre Completo</label>
             <input  type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
         </div>
         <div >
             <label  >Numero de telefono</label>
             <input  type="number" placeholder='011587892545' name="phone"  onChange={datosComprador} />
         </div>
         <div >
             <label  >E-mail</label>
             <input  type="email" placeholder='pepe@gmail.com' name="email"  onChange={datosComprador}/>
         </div>
         <button  type='submit'>Finalizar Compra</button>
       
     </form>
    </div>
    :
    <div>
     <h2>Muchas gracias por su compra!</h2>
     <h4>Su orden es: {orderId}</h4>
     <Link  to='/'>Volver</Link>
    </div>}
 </div>
  );
};

export default CheckOut;
/*import React, { useState } from "react";

const CheckOut = () => {
    const [comprador, setComprador]= useState({});
    const [orderId, setOrderId]= useState('')

    

    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    };

    return (
        <div>
         <div>
           <h2>Checkout</h2>
           <h4>Por favor complete todos los campos</h4>
           <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} >
         <div >
            <label  >Nombre Completo</label>
            <input  type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador} />
         </div>
         <div >
             <label  >Numero de telefono</label>
             <input  type="number" placeholder='011587892545' name="phone" onChange={datosComprador}  />
         </div>
         <div >
             <label  >E-mail</label>
             <input  type="email" placeholder='pepe@gmail.com' name="email" onChange={datosComprador} />
         </div>
         <button  type='submit'>Finalizar Compra</button>
        
         </form>
        </div>
        </div>
    
    );
};
export default CheckOut;*/