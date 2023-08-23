import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../Redux/action/addtocart";
import { Link } from "react-router-dom";
import styles from "../Styles/Cart.module.css";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(delItem(product));
  };

  const toggle = () => {
    var button = document.getElementById('myimg');
    var color = button.style.backgroundColor;
    button.addEventListener('click', function () {
      color = button.style.backgroundColor = color === 'white' ? 'red' : 'white';
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    state.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  };

  const cartItems = (product) => {
    return (
      <div className={styles.cartSection}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.image}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.prdDetails}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleClose(product)}
              className=""
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className={styles.delIcon}
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
            <button onClick={toggle} id="myimg">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className={styles.cartSection}>
        <div className={styles.emptyContainer}>
          <h1>Your Cart Is Empty</h1>
          <div className={styles.emptyImage}>
            <img src="/images/empty.png" alt="" />
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className={styles.cartSection}>
        <div className={styles.container}>
          <Link to="/checkout" className={styles.checkOut}>
            Proceed To Checkout
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 ? emptyCart() : state.map((product) => cartItems(product))}
      {state.length !== 0 && checkoutButton()}
      {state.length !== 0 && (
  <p className={styles.totalPrice}>
    Total Price: <span className={styles.totalPriceValue}>${calculateTotalPrice()}</span>
  </p>
)}

    </div>
  );
}
