import Header from "../component/Header";
import Main from "./Main";
import Footer from "../component/Footer";
import { listActivities } from "../../data";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/StyleHome.module.css";
import logoAlta from "../../assets/img/logo-ALTA.png";
import SideBar from "../component/SideBar";

function HomePage() {
  return (
    <>
      <Header />
      <div className="container-fluid row align-items-center">
        <SideBar />
        <div className="col-sm-12 col-lg-4 text-center">
          <img srcSet={logoAlta} alt="" className="m-auto" />
        </div>
        <div className="col-sm-12 col-lg-8">
          <Main listActivities={listActivities} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
