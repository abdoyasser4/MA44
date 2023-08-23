import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Products.module.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:2000/products");
        const responseData = await response.json();

        if (componentMounted) {
          setData(responseData);
          setFilter(responseData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:2000/products/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFilter(filter.filter((product) => product.id !== productId));
        console.log("Product deleted successfully");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        </div>
        <div className={styles.grid}>
          {filter.map((product) => {
            return (
              <div className={styles.card} key={product.id}>
                <div className={styles.prdImage}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.cardBody}>
                  <h5>{product.title && product.title.substring(0, 12)}</h5>
                  <p>${product.price}</p>
                  {isAdmin ? (
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete Product
                    </button>
                  ) : (
                    <Link
                      to={`/products/${product.id}`}
                      className={styles.buyNow}
                    >
                      Buy Now
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.productsSection}>
      <div className={styles.container}>
        <h2 className={styles.productsTitle}>Latest Products</h2>
        <ShowProducts />
      </div>
    </div>
  );
}
