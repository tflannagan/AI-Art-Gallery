import "./App.css";
import React from "react";
import img1 from "./images/img-1.png";
import img2 from "./images/img-23.png";
import img3 from "./images/img-14.png";
import img4 from "./images/img-32.png";

//Components
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className="App">
        <Card imgSrc={img1} />
        <Card imgSrc={img2} />
        <Card imgSrc={img3} />
        <Card imgSrc={img4} />
      </section>
      <Footer />
      {/* 
      <h3 align="center">Prompt Engineers:</h3>
      <p align="center">Alex & Ty Flannagan</p> */}
    </>
  );
}

export default App;
