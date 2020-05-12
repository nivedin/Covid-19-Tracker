import React from "react";


import styles from "./HeaderFooter.module.css";

const Header = ()=>{
    return(
        <div className={styles.Header}>
            <p>Covid-19 Tracker</p>
        </div>
    );
}

export default Header;