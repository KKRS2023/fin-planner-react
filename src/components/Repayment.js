import React from "react";
import DataTable from "react-data-table-component";
import "./Repayment.css";
import { Container } from "@mui/material";
import DebtTable from "./DebtTable";

const Repayment = (props) => {
  const payment = props.replay;
  const incomeAfterExpense = payment.incomeAfterExpense;
  const repaymentDate = payment.date;
  const debtPlans = payment.debtPlans;

  return (
    <div className="rdiv center">
      <div>Repayment Date : {repaymentDate}</div>
      <div>Income After Expense : {incomeAfterExpense}</div>
      <DebtTable dbPlans={debtPlans}/>
    </div>
  );
};

export default Repayment;
