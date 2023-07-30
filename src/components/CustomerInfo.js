import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';


const CustomerInfo = ({  }) => {
    const location = useLocation();
    const resultOfApi = location.state.result.apiResult;
    delete resultOfApi['debts'];
    const TableData = [resultOfApi];
   

    function DynamicTable(){
    const column = Object.keys(TableData[0]);
    const ThData =()=>{
        return column.map((data)=>{
            return <th key={data}>{data}</th>
        })
    }
    const tdData =() =>{   
        return TableData.map((data)=>{
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
        <table className="table">
            <thead className="nvb-tbl-header">
            <tr>{ThData()}</tr>
            </thead>
            <tbody>
            {tdData()}
            </tbody>
        </table>
    )
    }

    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3 nvb-main-px">
            <h3>Customer Information</h3>
            <div>
            <DynamicTable/>
            </div>
        </main>
        </div>
        );
    };
    
    export default CustomerInfo;