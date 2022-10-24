import "../../assets/css/bootstrap.min.css";
import styles from "../../assets/css/StyleHome.module.css";

function Header() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark mb-3 ${styles.navbarEdit}`}
      >
        <div className="container-fluid justify-content-center">
          <a className={`${styles.navEdit} navbar-brand`} href="#">
            TO DO APP
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
