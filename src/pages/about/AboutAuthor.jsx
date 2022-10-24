import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import styles from "../../assets/css/StyleHome.module.css";
import { useNavigate } from "react-router-dom";
import HomePage from "../home/HomePage";
function AboutAuthor() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container-fluid row align-items-center">
        <SideBar />
        <div>
          <h1>About Author</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            eaque, voluptas vitae earum et sint, deleniti exercitationem
            perferendis nihil eveniet inventore dolores laudantium assumenda.
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          className="p-3"
        >
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Back to Previous
          </button>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutAuthor;
