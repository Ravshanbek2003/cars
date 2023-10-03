import "./header.css";
import { useState } from "react";
import SVG1 from "./SVG1";
import SVG2 from "./SVG2";
import SVG3 from "./SVG3";
import SVG4 from "./SVG4";
import SVG5 from "./SVG5";
import SVG6 from "./SVG6";
import SVG7 from "./SVG7";
import SVG8 from "./SVG8";
import SVG9 from "./SVG9";
import cars from "../../__mock__/data";
// import SVG10 from "./SVG10";
const Header = ({ data, writeCars, setWriteCars }) => {
  const [showModul, setShowModule] = useState(false);
  function search(text) {
    if (text.trim().length) {
      setWriteCars((prev) =>
        prev.filter((el) => el.name.toLowerCase().includes(text))
      );
    } else {
      setWriteCars(cars);
    }
  }
  function hiddenModule() {
    setShowModule(!showModul ? true : false);
  }
  return (
    <div className="header">
      <h2>MORENT</h2>
      <label>
        {" "}
        <span>
          <SVG1 />
        </span>
        <input
          type="text"
          onInput={(e) => search(e.target.value)}
          placeholder="Search something here"
        />{" "}
        <span>
          <SVG2 />
        </span>
      </label>
      <ul>
        <li className="like-modul" onClick={() => hiddenModule()}>
          <SVG3 />
          {showModul && (
            <div className="modul">
              {writeCars.map((car) => {
                return (
                  <>
                    {car.like && (
                      <div className="cars-box">
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
                            {car.like ? <SVG4 /> : <SVG5 />}
                          </div>
                        </div>
                        <div className="cars-box-middle">
                          <img src={car.img} alt="img" />
                        </div>
                        <div className="cars-box-bottom">
                          <div className="cars-box-bottom-1">
                            <div className="manual">
                              <SVG6 /> {car.bag}
                            </div>
                            <div className="manual">
                              <SVG7 /> Manual
                            </div>
                            <div className="manual">
                              <SVG8 />
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
                    )}
                  </>
                );
              })}
            </div>
          )}
        </li>
        <li>
          <SVG9 />
        </li>
        <li>{/* <SVG10 /> */}</li>
        <li>
          <img src="./public/images/profil.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
