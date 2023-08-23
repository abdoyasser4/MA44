import React from 'react';
import styles from "../Styles/Notfound.module.css"
const Notfound = (disp) => {
    disp.visibility(false);
    return (
        <div className={styles.notFoundsection}>
            <div className={styles.image}>
                <img src="images/error404.png" alt=""/>
            </div>
        </div>
    );
};


export default Notfound;