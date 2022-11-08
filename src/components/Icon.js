import React from "react";
import anywhere from "../images/anywhere.png";
import food from "../images/food.png";
import people from "../images/people.png";

const Icon = () => {
  return (
    <section>
      <div className="container-md mt-5">
        <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-center">
          <h2 className="color1 text-center mt-4 fw-bolder">
            How do we benefit you?
          </h2>
          <div className="card-group mt-5">
            <div className="card border-0">
              <img
                src={anywhere}
                className="mx-auto"
                alt="anywhere"
                style={{ width: `100px`, height: `100px` }}
              />
              <p className="text-center fw-bolder px-5">
                Write a review of various type of food anywhere you like!
              </p>
            </div>
            <div className="card border-0">
              <img
                src={food}
                className="mx-auto"
                alt="food"
                style={{ width: `100px`, height: `100px` }}
              />
              <p className="text-center fw-bolder px-5">
                Discover people preferences of your favorite food!
              </p>
            </div>
            <div className="card border-0">
              <img
                src={people}
                className="mx-auto"
                alt="people"
                style={{ width: `100px`, height: `100px` }}
              />
              <p className="text-center fw-bolder px-5">
                Explore the food trend by its rating!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icon;
