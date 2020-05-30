import React from "react";
import styles from "./Navbar.module.css";
import logo from "./sapnelogo-2.png";


function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
      <span><a href="http://sapne.org.in/"><img src={logo} alt="sapneLogo" className={styles.img}/></a></span>
        <div className={styles.title}>
          <a href="/">Covid Tracker</a>
        </div>
        <div className={styles.items}>
          <ul>
            <li>
            <a href="http://sapne.org.in/">HOME</a>
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
