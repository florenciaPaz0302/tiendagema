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

   