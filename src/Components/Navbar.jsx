import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "../Styles/Navbar.module.css";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const fav = useSelector((fav) => fav.handleCart);
  const navegate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const logout = () => {
   localStorage.removeItem("isAdmin"); 
    navegate("/Login");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.upperNav}>
        <div className={styles.container}>
          <Link className={styles.logo} to="#">
            MA4
          </Link>
          <div className={styles.cartLogout} id="navbarSupportedContent">
            {username !== null ? (
              <div className={styles.mydiv}> <img
                src="/images/Avatar.jpg"
                className={styles.photo}
                alt="..."
              /><h1 className={styles.Name}>{username}</h1></div>
            ) : (
              <div className="buttons"></div>
            )}
            <Link to="/cart" className={styles.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg> 
              <span>{fav.length}</span>
            </Link>
            <button onClick={logout} className={styles.logout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.lowerNav}>
        <ul className={styles.container}>
          <li>
            <Link className={styles.navLink} aria-current="page" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link className={styles.navLink} to="/add-products">
                Add Products
              </Link>
            </li>
          )}
          <li>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
