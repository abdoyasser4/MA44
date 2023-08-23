import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Welcome.module.css";
export default function Home(disp) {
  disp.visibility(false);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className="">Hello <span>{username}</span></h1>
          <div class="">
            <div class="">
              <h2 class="">Your Favorite Place for shopping </h2>
            </div>
            <div>
              <p>
                You can find all new clothes, electronics and more
              </p>
              <Link className={styles.continue} to="/Home">
                Continue
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/images/ecommerce.png" alt="" />
        </div>
      </div>
    </div>
  );
}
