import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
      <span></span>
        <div className={styles.title}>
          <a href="/">Covid Tracker</a>
        </div>
        <div className={styles.items}>
          <ul>
            <li>
              <a href="https://covidindia-sp.netlify.app/">HOME</a>
            </li>
            <li>
              <a href="https://covidindia-sp.netlify.app">STATE WISE</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
