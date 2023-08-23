import React from "react";
import styles from "../Styles/About.module.css";
// eslint-disable-next-line
export default function (disp) {
  // eslint-disable-next-line
  disp.visibility(true);
  return (
    <div className={styles.aboutSection}>
      <h1>Our Team</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div class={styles.card}>
            <img src="/images/Avatar.jpg" className={styles.image} alt="..." />
            <div className={styles.cardBody}>
              <p>Abdo Yasser</p>
            </div>
          </div>
          <div class={styles.card}>
            <img
              src="/images/Avatar.jpg"
              className={styles.image}
              alt="..."
            />
            <div className={styles.cardBody}>
              <p>Ahmed Khaled</p>
            </div>
          </div>
          <div class={styles.card}>
            <img
              src="/images/Avatar.jpg"
              className={styles.image}
              alt="..."
            />
            <div className={styles.cardBody}>
              <p>Mohammed Khaled</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div class={styles.card}>
            <img
              src="/images/Avatar.jpg"
              className={styles.image}
              alt="..."
            />
            <div className={styles.cardBody}>
              <p>Ahmed Hamdy</p>
            </div>
          </div>
          <div class={styles.card}>
            <img
              src="/images/Avatar.jpg"
              className={styles.image}
              alt="..."
            />
            <div className={styles.cardBody}>
              <p>Ahmed Fathi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
