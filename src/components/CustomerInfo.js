import React from 'react';
import CustomerInfoGrid from './CustomerInfoGrid';


const CustomerInfo = ({  }) => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0">Financial Planner</h3>
                <img className="mb-4 nvb-img" src={require('../logo/NW_Squircle_RGB.png')} alt="" width="72" height="57"/>
            </div>
         
        </header>
        <main className="px-3 nvb-main-px">
            <h3>Customer Information</h3>
            <div>
                <CustomerInfoGrid/>
            </div>
        </main>
        <footer className="mt-auto text-white-50">
            <p>Financial Planner by KKRS</p>
        </footer>
        </div>
        );
    };
    
    export default CustomerInfo;