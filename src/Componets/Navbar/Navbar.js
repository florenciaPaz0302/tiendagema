import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink} from "react-router-dom"

const Navbar = () => {
  const categorias = [
    { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
    { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
    { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
    { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
  ];
    
    
      return (
        <header style={styles.container}>
          <Link style={styles.imagenes} to="/">
            <img style={styles.imagenes} src={logo} alt="tienda online" />
          </Link>
          <h1 style={{backgroundColor: "blue",fontSize:"6rem"}}>TIENDA GEMA</h1>
          <nav>
            {categorias.map((categoria) => {
              return (
                <NavLink
                  key={categoria.id}
                  style={styles.categorias}
                  to={categoria.ruta}
                >
                  {categoria.nombre}
                </NavLink>
              );
            })}
          </nav>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </header>
      );
    };
    
    export default Navbar;

/*<a style={styles.categorias} href="">Categoria1</a>
                <a style={styles.categorias} href="">Categoria2</a>
                <a style={styles.categorias} href="">Categoria3</a>
                <a style={styles.categorias} href="">Categoria4</a>
                */

