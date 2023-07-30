import React from "react";

const DebtTable = (props) => {
  const debtplans = props.dbPlans;

  const tdData = () => {
    return debtplans.map((data) => {
      return (
        <tr>
          <td>{data.debtType}</td>
          <td>{data.remainingDebt}</td>
          <td>{data.emi}</td>
          <td>{data.additionalPayment}</td>
          <td>{data.debtRemaining}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td key="debtType">
              <b>Debt Type</b>
            </td>
            <td key="remainingDebt">
              <b>Remaining Debt</b>
            </td>
            <td key="emi">
              <b>Emi</b>
            </td>
            <td key="additionalPayment">
              <b>Addition payment</b>
            </td>
            <td key="debtRemaining">
              <b>Debt Remaining</b>
            </td>
          </tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </>
  );
};

export default DebtTable;
