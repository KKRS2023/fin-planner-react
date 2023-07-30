import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomerTable from "./CustomerTable";
import CustomerDebtTable from "./CustomerDebtTable";

const CustomerInfo = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const resultOfApi = location.state.result.apiResult;
  const debtDetails = resultOfApi.debts;
  //const [plan, setPlan] = useState("");

  const handleRequest = () => {
    axios
      .post(`http://localhost:8080/repay/v1/plan`, resultOfApi, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          let plan = response.data;
          navigate("/debtPlan", { state: { result: { plan } } });
        }
      })
      .catch((err) => {
        console.log("Error from post call");
      });
  };

  return (
    <div className="cover-container d-flex w-80 h-100 p-3 mx-auto flex-column">
     <main className="px-4 nvb-main-px">
      <h3>Customer Information</h3>
      <CustomerTable  customerData={resultOfApi} />
      <CustomerDebtTable customerData={debtDetails} />
      
      
        <button
          className="btn btn-lg btn-light fw-bold border-white nvb-btn px-4"
          onClick={handleRequest}
        >
          Calculate Plan
        </button>
      </main>
    </div>
  );
};

export default CustomerInfo;
