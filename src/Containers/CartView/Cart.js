import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";



export const Cart = ({ estilo, color }) => {
    const { cart } = useContext(Context);

    
    return (
        <>
          {cart.length === 0 ? (
            <>
              <h1 className={estilo ? "blue" : "red"}>
                No agregaste productos <Link to="/">ingresa aqui</Link>
              </h1>
              <h2 className={`tamano ${color || ''}`}>Gracias por visitarnos</h2>
            </>
          ) : (
            <>
              {cart.map((producto) => (
                <h1 key={producto.id}>{producto.title}</h1>
              ))}
            </>
          )}
          <Link to='/checkout'> <button>finalizar compra</button></Link>
        </>
      );
    };

    /*
    
    import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"const comprador = {
        nombre: `maria`,
        apellido: `mitre`,
        email: `b@b.com`
    };
    const finalizarCompra = ()=>{
        const ventasCollection = collection(db,"ventas");
        addDoc(ventasCollection,{
            comprador,
            items:[{nombre:'remera'},{nombre:'short'}],
            total: 200,
            date:serverTimestamp()
        })
        .then(result=>{
            console.log(result.id);
          })
        .catch(e => {
            console.log('todo mal');
            console.log(e);
          });
          
        clear();
        }
        const actualizarStock = ()=>{
            const updateStock = doc(db, "productos","tr8nxpCyuMbOsHfoyZuE")
            updateDoc(updateStock,{stock:80})
          }*/