"use client";
import { useState } from "react";
import "./style.css";
import RestaurantHeader from "../_components/restaurantHeader";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Restaurant Login/signup page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <div>
          <button className="button-login" onClick={() => setLogin(!login)}>
            {login
              ? "Don't Have Account? SignUp"
              : "Already have Account?Login"}
          </button>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
};

export default Restaurant;
