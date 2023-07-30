import React from "react";

const CustomerTable = (props) => {
  const customerData = props.customerData;
  return (
    <div>
      <table className="table">
        <thead className="nvb-tbl-header">
          <tr>
            <td key="Field"><b>Field</b></td>
            <td key="Value"><b>Value</b></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customer Id</td>
            <td>{customerData.accountNumber}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{customerData.name}</td>
          </tr>
          <tr>
            <td>Social Security Number</td>
            <td>{customerData.ssn}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>{customerData.dob}</td>
          </tr>
          <tr>
            <td>Total Income(£)</td>
            <td>{customerData.income}</td>
          </tr>
          <tr>
            <td>Total Expense(£)</td>
            <td>{customerData.expense}</td>
          </tr>
          <tr>
            <td>Expected increase in income(%)</td>
            <td>{customerData.increaseInIncome}</td>
          </tr>
          <tr>
            <td>Expected increase in expense(%)</td>
            <td>{customerData.increateInExpense}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
