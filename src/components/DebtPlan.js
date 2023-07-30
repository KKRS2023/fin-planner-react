import { React, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import Repayment from "./Repayment";

function DebtPlan() {
  const custId = "10000002";
  const [debtPlan, setDebtPlan] = useState("");
  const [payments, setPayments] = useState([]);

  const handleRequest = () => {
    axios
      .get(`http://localhost:8080/account/v1/${custId}`)
      .then((response) => {
        if (response.status === 200) {
          axios
            .post(`http://localhost:8080/repay/v1/plan`, response.data, {
              headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
              if (response.status === 200) {
                console.log(response.data);
                setDebtPlan(response.data);
                setPayments(response.data.repayments);
              }
            }).catch((err) => {
              console.log("Error from post call");
            });
        }
      })
      .catch((err) => {
        console.log("Error from post call");
      });
  };

  const displayRepayments = payments.map(
    (element) => {
      return (
        <div>
          <Repayment replay={element} />
        </div>
      )
    }
  )

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <ToastContainer />
      <main className="px-3 nvb-main-px">
        <h3>Debt Plan</h3>
        <div>
          <p>{debtPlan.message  != null ? debtPlan.message : "Initial Load"}</p>
          <p>{payments.length > 0 ? displayRepayments : "Initial Load"}</p>
          <Container>
            <button
              className="btn btn-lg btn-light fw-bold border-white nvb-btn"
              onClick={handleRequest}
            >
              Get Customer Data
            </button>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default DebtPlan;
