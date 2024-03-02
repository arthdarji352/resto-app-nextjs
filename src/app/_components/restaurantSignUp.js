const RestaurantSignUp = () => {
  return (
    <>
      <h3>Signup</h3>
      <div>
        <div className="input-wrapper">
          <input type="text" placeholder="email" className="input-field " />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field "
            type="password"
            placeholder="password"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field "
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            className="input-field "
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter city"
            className="input-field "
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter full address"
            className="input-field "
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter  contact No."
            className="input-field "
          />
        </div>
        <div className="input-wrapper">
          <button className="input-field ">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
