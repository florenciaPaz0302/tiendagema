import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [qty,setQty] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cantidad =0;
        let totalC = 0;
        cart.forEach(item => {
            cantidad += item.cantidad;
            totalC +=(item.price * item.cantidad)
        });
        setQty(cantidad);
        setTotal(totalC);

    }, [cart])

    const addItem = (item,cantidad) =>{
        const purchase = {...item, qty:cantidad}
        if(IsInCart(item.id)){
                    const carritoActualizado = cart.map((prod)=>{
                        if(prod.id === item.id){
                            return {...prod, quantity:prod.qty + cantidad}
                        }else{
                            return prod
                        }
                    })
                    setCart(carritoActualizado )
                }else{
                    setCart([...cart, purchase])
                }
       
    };

    const deleteItem = (id) =>{
        setCart(cart.filter(item => item.id !== id))
    };
    
    const IsInCart = (id) => cart.some(item => item.id === id)
    
    
    const clear = () =>{
        setCart([]);
        setQty(0);
        setTotal(0);
    }

    return <Context.Provider value={{cart, qty, total,addItem, deleteItem, clear}}>{children}</Context.Provider>;
}

// const existsInCart = cart.find((prod)=> prod.id === item.id)