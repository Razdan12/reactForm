import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import AboutAuthor from "./pages/about/AboutAuthor";
import AboutApp from "./pages/about/AboutApp";
import NotFoundPage from "./pages/404Page/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/about/about-author" exact element={<AboutAuthor />} />
          <Route path="/about/about-app" exact element={<AboutApp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
