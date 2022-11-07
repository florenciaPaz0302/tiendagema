import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"


export const ItemListContainer =({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((res) =>res.json())
        .then((json) =>setProducts(json))
        .catch((error) =>{
            console.log(error);
        })
        .finally(setLoading(false));

    }, [])
    return (
        <>
         <h1>{greeting}</h1>
         {
            <>
            {loading ? <h1>Cargando..</h1> : <ItemList products={products} />}
            </>
         }
        </>
    );
};

/*const productos = [
    {nombre:"vino", id:0, categoria:"vinos", stock:5, precio:200},
    {nombre:"cerveza", id:1, categoria:"cervecitas", stock:10, precio:400},
    {nombre:"fernet", id:2, categoria:"fernecito", stock:15, precio:100},
    {nombre:"gin", id:3, categoria:"gins", stock:12, precio:300},
];

const obtenerProductos = new Promise((resolve, reject) => {
    resolve(productos);
    //reject("error en promesa")
})*/
    