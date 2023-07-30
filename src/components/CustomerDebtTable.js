import React from "react";

const CustomerDebtTable = (props) => {
  const customerDebtData = props.customerData;
  console.log(customerDebtData);
  const columns = [
    { data: "debttType",   name: "Debt Type" },
    { data: "amount", name: "Amount" },
    { data: "emi",  name: "EMI" },
    { data: "tenure",  name: "Tenure" }
  ];
  const column = Object.keys(customerDebtData[0]);
    const ThData =()=>{
        return columns.map(({data, name})=>{
            return <th key={data}>{name}</th>
        })
    }
    const tdData =() =>{   
        return customerDebtData.map((data)=>{
        return(
            <tr>
                    {
                    column.map((v)=>{
                        return <td>{data[v]}</td>
                    })
                    }
            </tr>
        )
        })
    }
    return (
        <table className="table nvg-tbl">
            <thead className="nvb-tbl-header">
            <tr>{ThData()}</tr>
            </thead>
            <tbody>
            {tdData()}
            </tbody>
        </table>
    )
    }


export default CustomerDebtTable;
