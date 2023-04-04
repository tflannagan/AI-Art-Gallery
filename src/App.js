import "./App.css";
import React from "react";
import img1 from "./images/img-1.png";
import img2 from "./images/img-23.png";
import img3 from "./images/img-14.png";

//Components
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <section className="App">
        <Card imgSrc={img1} />
        <Card imgSrc={img2} />
        <Card imgSrc={img3} />

        {/*         
        <div className="card">
          <div className="card-content">
            <img
              className="image prof"
              alt="img"
              src={require("./images/img-6.jpg")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-17.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-2.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image prof"
              loading="lazy"
              alt="img"
              src={require("./images/img-4.jpg")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-7.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-3.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-8.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-10.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image prof"
              loading="lazy"
              alt="img"
              src={require("./images/img-9.jpg")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-11.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-12.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image prof"
              loading="lazy"
              alt="img"
              src={require("./images/img-13.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-14.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-16.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-15.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-5.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image prof"
              loading="lazy"
              alt="img"
              src={require("./images/img-18.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-19.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-20.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-21.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-22.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-23.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-24.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-25.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-26.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-27.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-28.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-29.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-30.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-31.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-32.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-33.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-34.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-35.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-36.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-37.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-38.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-39.png")}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img
              className="image"
              loading="lazy"
              alt="img"
              src={require("./images/img-40.png")}
            />
          </div>
        </div> */}
      </section>

      <h3 align="center">Prompt Engineers:</h3>
      <p align="center">Alex & Ty Flannagan</p>
    </>
  );
}

export default App;
