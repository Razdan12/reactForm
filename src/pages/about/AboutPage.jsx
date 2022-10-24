import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import { Link } from "react-router-dom";
import styles from "../../assets/css/StyleHome.module.css";
// import icon from "../../assets/css/fa.all.min.css";
import React from "react";
function AboutPage() {
  return (
    <>
      <Header />
      <SideBar />
      <ul className={styles.menuSideBar}>
        <li className={styles.liSide}>
          <Link to="/about/about-author" className="btn btn-primary w-100">
            About Author
          </Link>
        </li>
        <li className={styles.liSide}>
          {/* <a className={styles.aSide} href="#"> */}
          <Link to="/about/about-app" className="btn btn-primary w-100">
            About App
          </Link>
          {/* </a> */}
        </li>
      </ul>
      <Footer />
    </>
  );
}

export default AboutPage;
