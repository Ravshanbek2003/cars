import "./cars.css";

import { useState } from "react";
const Cars = ({ data, setWriteCars, writeCars }) => {
  // const [hiddenlike, setHiddenlike] = useState(true);
  function likeBtn(id) {
    console.log(id);
    setWriteCars((prev) => {
      return prev.map((element) => {
        if (element.id === id) {
          return { ...element, like: !element.like };
      }
        console.log(element);
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
                          fill="#ED3F3F"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                          stroke="#90A3BF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="cars-box-middle">
                  <img src={car.img} alt="img" />
                </div>
                <div className="cars-box-bottom">
                  <div className="cars-box-bottom-1">
                    <div className="manual">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z"
                          fill="#90A3BF"
                        />
                      </svg>{" "}
                      {car.bag}
                    </div>
                    <div className="manual">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                          fill="#90A3BF"
                        />
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="8"
                          fill="white"
                        />
                        <path
                          d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                          fill="#90A3BF"
                        />
                        <rect
                          x="8"
                          y="8"
                          width="8"
                          height="8"
                          rx="4"
                          fill="white"
                        />
                        <rect
                          x="11"
                          y="17"
                          width="2"
                          height="4"
                          fill="#90A3BF"
                        />
                        <rect
                          x="17"
                          y="11"
                          width="4"
                          height="2"
                          fill="#90A3BF"
                        />
                        <rect
                          x="3"
                          y="11"
                          width="4"
                          height="2"
                          fill="#90A3BF"
                        />
                      </svg>{" "}
                      Manual
                    </div>
                    <div className="manual">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                          fill="#90A3BF"
                        />
                        <path
                          d="M14.08 14.1499C11.29 12.2899 6.74002 12.2899 3.93002 14.1499C2.66002 14.9999 1.96002 16.1499 1.96002 17.3799C1.96002 18.6099 2.66002 19.7499 3.92002 20.5899C5.32002 21.5299 7.16002 21.9999 9.00002 21.9999C10.84 21.9999 12.68 21.5299 14.08 20.5899C15.34 19.7399 16.04 18.5999 16.04 17.3599C16.03 16.1299 15.34 14.9899 14.08 14.1499Z"
                          fill="#90A3BF"
                        />
                        <path
                          d="M19.99 7.3401C20.15 9.2801 18.77 10.9801 16.86 11.2101C16.85 11.2101 16.85 11.2101 16.84 11.2101H16.81C16.75 11.2101 16.69 11.2101 16.64 11.2301C15.67 11.2801 14.78 10.9701 14.11 10.4001C15.14 9.4801 15.73 8.1001 15.61 6.6001C15.54 5.7901 15.26 5.0501 14.84 4.4201C15.22 4.2301 15.66 4.1101 16.11 4.0701C18.07 3.9001 19.82 5.3601 19.99 7.3401Z"
                          fill="#90A3BF"
                        />
                        <path
                          d="M21.99 16.5899C21.91 17.5599 21.29 18.3999 20.25 18.9699C19.25 19.5199 17.99 19.7799 16.74 19.7499C17.46 19.0999 17.88 18.2899 17.96 17.4299C18.06 16.1899 17.47 14.9999 16.29 14.0499C15.62 13.5199 14.84 13.0999 13.99 12.7899C16.2 12.1499 18.98 12.5799 20.69 13.9599C21.61 14.6999 22.08 15.6299 21.99 16.5899Z"
                          fill="#90A3BF"
                        />
                      </svg>
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

            // -----
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
