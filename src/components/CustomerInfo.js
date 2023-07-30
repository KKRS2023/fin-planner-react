import React from 'react';
import CustomerInfoGrid from './CustomerInfoGrid';


const CustomerInfo = ({  }) => {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3 nvb-main-px">
            <h3>Customer Information</h3>
            <div>
                <CustomerInfoGrid/>
            </div>
        </main>
        </div>
        );
    };
    
    export default CustomerInfo;