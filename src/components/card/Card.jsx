import "./card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-left">
          <h3>
            The Best Platform <br /> for Car Rental
          </h3>
          <p>
            Ease of doing a car rental safely and <br /> reliably. Of course at
            a low price.
          </p>
          <button>Rental Car</button>
          <div className="img">
            <img src="./public/images/card-1.png" alt="" />
          </div>
        </div>
        <div className="card-top-right">
          <h3>
            Easy way to rent a <br /> car at a low price
          </h3>
          <p>
            Ease of doing a car rental safely and <br /> reliably. Of course at
            a low price.
          </p>
          <button>Rental Car</button>
          <div className="img">
            <img src="./public/images/card-2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="card-bottom">
        
        <div className="card-bottom-left">
          <div className="pick-up">
            <img src="./public/images/PickUp.svg" alt="" />
          </div>
          <div className="lot-time-blok">
            <label>
              <p>Locations</p>
              <select>
                <option value="">Select your city</option>
                <option value="">Select your city</option>
                <option value="">Select your city</option>
              </select>
            </label>
            <div className="line"></div>
            <label>
              {" "}
              <p>Date</p>
              <select>
                <option value="">Select your date</option>
                <option value="">Select your date</option>
                <option value="">Select your date</option>
              </select>
            </label>
            <div className="line"></div>
            <label>
              {" "}
              <p>Time</p>
              <select>
                <option value="">Select your time</option>
                <option value="">Select your time</option>
                <option value="">Select your time</option>
              </select>
            </label>
          </div>
        </div>

        <div className="card-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M5.16045 0.835835L5.16045 14.4536"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.08279 4.93188L5.16056 0.835218L9.23834 4.93188"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0889 17.1672L15.0889 3.54946"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.1666 13.0711L15.0888 17.1677L11.011 13.0711"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="card-bottom-left">
          <div className="pick-up">
            <img src="./public/images/DropOff.svg" alt="" />
          </div>
          <div className="lot-time-blok">

            <label>
              <p>Locations</p>
              <select>
                <option value="">Select your city</option>
                <option value="">Select your city</option>
                <option value="">Select your city</option>
              </select>
            </label>
            <div className="line"></div>
            <label>
              {" "}
              <p>Date</p>
              <select>
                <option value="">Select your date</option>
                <option value="">Select your date</option>
                <option value="">Select your date</option>
              </select>
            </label>
            <div className="line"></div>
            <label>
              {" "}
              <p>Time</p>
              <select>
                <option value="">Select your time</option>
                <option value="">Select your time</option>
                <option value="">Select your time</option>
              </select>
            </label>
          </div>
          {/* ======= */}
        </div>
      </div>
      <div className="popular">
        <p>Popular Car</p>
        <h4>View All</h4>
      </div>
    </div>
  );
};

export default Card;
