import React from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistroy = () => {
    return (
        <div>
            <Helmet>
        <title>Payment Histroy - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Payment History</h1>
        </div>
      </div>
        </div>
    );
};

export default PaymentHistroy;