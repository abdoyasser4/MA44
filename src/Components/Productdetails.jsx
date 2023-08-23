import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// eslint-disable-next-line
import { addItem, delItem } from "../Redux/action/addtocart";
import { Link, useParams } from "react-router-dom";
import styles from "../Styles/Productdetails.module.css"
export default function Productdetails() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(` http://localhost:2000/products/${id}`);
      setproduct(await response.json());
    };
    getProduct();
 
  }, []);

  const ShowProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
            <img
              src={product.image}
              alt={product.title}
            />
            </div>
          <div className={styles.details}>
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <h3>
              {" "}
              Price : ${product.price}
            </h3>
            <p>{product.description}</p>
            <button
              className={styles.addToCart}
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
          
            <Link to="/cart" className={styles.goToCart}>
              Go to Cart
            </Link>
          </div>
        </div>
    );
  };
  return (
    <div className={styles.prdDetailsSection}>
        <ShowProduct />
    </div>
  );
}
