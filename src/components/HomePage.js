import React from "react";
import { ChangeEvent, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const HomePage = ({}) => {
 
  const [customerId, setCustomerID] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomerID(e.target.value);
  };

  const handleClick = () => {
    console.log("customerId", customerId)
    if(customerId.length != 8){
      toast.error("Please enter valid customerId")
    }else{
      navigate("/CustomerInfo", { custId: { customerId } });
    }   
  };

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <ToastContainer/>
      <main className="px-3 nvb-main-px">
        <h3>Key in your Customer ID</h3>
        <div className="form-floating ">
          <p className="lead">
            {" "}
            <input
              type="email"
              className="form-control nvb-input"
              id="floatingInput"
              onChange={handleChange}
              value={customerId}
              placeholder="Customer ID"
            />
          </p>
        </div>
        <p className="lead">
          <button
            className="btn btn-lg btn-light fw-bold border-white nvb-btn"
            onClick={handleClick}
          >
            Submit
          </button>
        </p>
      </main>
    </div>
  );
};

export default HomePage;
