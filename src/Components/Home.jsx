import React from "react";
import Products from "./Products";
import Footer from "./Footer";
import styles from "../Styles/Home.module.css";
export default function Home(disp) {
  disp.visibility(true);

  return (
    <div className={styles.homeSection}>
      <div className={styles.container}>
        <div className={styles.homeContent}>
          <div className={styles.image}>
            <img src="/images/welcome.png" alt="" />
          </div>
          <h1 className={styles.homeTitle}>Check Out All The Trends</h1>
          <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
        </div>
      </div>
        <Products />
        <Footer />
    </div>
  );
}
