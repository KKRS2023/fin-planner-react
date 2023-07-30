import React from "react";
import DataTable from "react-data-table-component";

const Repayment = (props) => {
    const payment = props.replay;
    const incomeAfterExpense = payment.incomeAfterExpense;
    const repaymentDate = payment.date;
    return(
        <div>
            <h1>Repayment Date       : {repaymentDate}</h1>
            <h1>Income After Expense : {incomeAfterExpense}</h1>
        </div>
    )
}

export default Repayment;