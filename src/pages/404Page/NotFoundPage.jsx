import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import logoAlta from "../../assets/img/logo-ALTA.png";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container-fluid row align-items-center p-5">
        <SideBar />
        <div className="col-sm-12 col-lg-4 text-center">
          <img srcSet={logoAlta} alt="" className="m-auto" />
        </div>
        <div className="col-sm-12 col-lg-8">
          <h1 style={{ color: "red" }}>
            <b>404 - PAGE NOT FOUND</b>
          </h1>
        </div>
        <button onClick={() => navigate("/")} className="btn btn-primary mt-5">
          Back to Home
        </button>
      </div>

      <Footer />
    </>
  );
}

export default NotFoundPage;
