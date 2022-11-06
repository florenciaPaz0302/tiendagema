import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";

const Navbar = ({ nombreUsuario, children }) => {
    const categorias = [
        {nombre:"Categoria 1", id:0, ruta:"#"},
        {nombre:"Categoria 2", id:1, ruta:"#"},
        {nombre:"Categoria 3", id:2, ruta:"#"},
    ];
    return (
        <header style={styles.container}>
            <img style={styles.imagenes} src={logo} alt="tienda" />
            <h1>Bienvenido {nombreUsuario}</h1>
            <nav>
                {
                 categorias.map((categoria)=>{
                    return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
                 })
                }
            </nav>
            <CartWidget />
        </header>
    );
};

export default Navbar;

/*<a style={styles.categorias} href="">Categoria1</a>
                <a style={styles.categorias} href="">Categoria2</a>
                <a style={styles.categorias} href="">Categoria3</a>
                <a style={styles.categorias} href="">Categoria4</a>
                */

