import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useLocation} from 'react-router-dom';

const columns = [
    { field: 'account_number', headerName: 'ACCOUNT_NUMBER' , editable:true},
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'ssn', headerName: 'SSN', width: 300 },
    { field: 'expense', headerName: 'Expense', width: 300 },
    { field: 'income', headerName: 'Income', width: 300 },
    { field: 'increaseInIncome', headerName: 'Increse_In_Income', width: 300 },
    { field: 'increaseInExpense', headerName: 'Increase_In_Expense', width: 300 },
    { field: 'dob', headerName: 'D.O.B', width: 100 }

  ]

const CustomerInfoGrid= ({navigation}) => {
    const [tableData, setTableData] = useState([]);
    const location = useLocation();
    const custId = location.custId;
    console.log(custId);
    useEffect(() => {
        fetch("http://localhost:8080/account/v1/10000002")
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [])
       console.log(tableData)
  return (
    <div>
      <DataGrid className="nvb-grid"
        rows={tableData}
        columns={columns}
        pageSize={12}
      /> 
    </div>
  )
}

export default CustomerInfoGrid;