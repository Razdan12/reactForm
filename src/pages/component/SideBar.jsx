import styles from "../../assets/css/StyleHome.module.css";
// import icon from "../../assets/css/fa.all.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaExpandAlt } from "react-icons/fa";

function SideBar() {
  return (
    <>
      <input type="checkbox" id={styles.check} />
      <label htmlFor={styles.check}>
        <FaBars id={styles.btn} />
        <FaExpandAlt id={styles.cancel} />
      </label>

      <div className={styles.sidebar}>
        <header className={styles.titleSideBar}>MENU</header>
        <ul className={styles.menuSideBar}>
          <li className={styles.liSide}>
            <Link to="/" className={styles.aSide}>
              Home
            </Link>
          </li>
          <li className={styles.liSide}>
            <Link to="/about" className={styles.aSide}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
