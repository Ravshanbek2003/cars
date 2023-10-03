
import { useState } from "react";
import SVG1 from "./SVG1";
import SVG2 from "./SVG2";
import SVG3 from "./SVG3";
import SVG4 from "./SVG4";
import SVG5 from "./SVG5";
import "./cars.css";
const Cars = ({ data, setWriteCars, writeCars }) => {
  function likeBtn(id) {
    setWriteCars((prev) => {
      return prev.map((element) => {
        if (element.id === id) {
          return { ...element, like: !element.like };
      }
        return element;
      });
    });
  }
  return (
    <>
      <div className="cars-card">
        {writeCars.map((car, idx) => {
          return (
            <>
              {car.id === 5 && (
                <div className="RecomendationCar">Recomendation Car</div>
              )}
              <div className="cars-box" key={idx}>
                <div className="cars-box-top">
                  <div className="cars-box-top-left">
                    <h4>{car.name}</h4>
                    <p>{car.title}</p>
                  </div>
                  <div
                    className="like-btn"
                    key={car.id}
                    onClick={() => likeBtn(car.id)}
                  >
                    {car.like ? (
                      <SVG1/>
                    ) : (
                      <SVG2/>
                    )}
                  </div>
                </div>
                <div className="cars-box-middle">
                  <img src={car.img} alt="img" />
                </div>
                <div className="cars-box-bottom">
                  <div className="cars-box-bottom-1">
                    <div className="manual">
                      <SVG3/>
                      {" "}
                      {car.bag}
                    </div>
                    <div className="manual">
                      <SVG4/>
                      {" "}
                      Manual
                    </div>
                    <div className="manual">
                     <SVG5/>
                      {car.people}
                    </div>
                  </div>
                  <div className="cars-box-bottom-1">
                    <div className="sum">
                      {car.price}
                      <span> day</span>
                    </div>
                    <button>Rent Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="showMore">
        <div></div>
        <button>Show more car</button>
        <p>120 Car</p>
      </div>
    </>
  );
};

export default Cars;
