import React from 'react';
import { ChangeEvent, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import styles from './App.css';

const HomePage = ({  }) => {
    const [customerId, setCustomerID] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCustomerID(e.target.value);
      };
      const handleClick = () => {
        navigate('/CustomerInfo', {state:{custId:{customerId}}});
      };
  return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">Financial Planner</h3>
                <img className="mb-4 nvb-img" src={require('./NW_Squircle_RGB.png')} alt="" width="72" height="57"/>
            </div>
        </header>

    <main className="px-3 nvb-main-px">
    <h3>Key in your Customer ID</h3>
    <div className="form-floating ">
        <p className="lead"> <input type="email" className="form-control nvb-input" id="floatingInput" onChange={handleChange} value={customerId} placeholder="Customer ID"/></p>
    
    </div>
    <p className="lead">
      <button className="btn btn-lg btn-light fw-bold border-white nvb-btn"  onClick={handleClick} >Submit</button>
    </p>
  
  </main>
  <footer className="mt-auto text-white-50">
    <p>Financial Planner by KKRS</p>
  </footer>
</div>
  );
};

export default HomePage;
