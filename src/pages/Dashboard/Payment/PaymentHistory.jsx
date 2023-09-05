import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BiTrash } from 'react-icons/bi';
import { getAllPayments } from '../../../api/fetch';
import { useEffect } from 'react';
import { useState } from 'react';

const PaymentHistroy = () => {
    const [payments, setpayments] = useState([]);
    useEffect(() => {
      getAllPayments().then((data) => setpayments(data));
    }, []);
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

      <div className="overflow-x-auto mt-12 px-8 text-black">
  <table className="table table-zebra">
    {/* head */}
    <thead className="text-xl">
      <tr>
        <th>Si No </th>
        <th>Name</th>
        <th>email</th>
        <th>name of package</th>
        <th>amount</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {payments.map((payment,index)=>(
          <tr key={payment._id}>
            <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={feedback.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
            <div>
              <div className="font-bold">{payment.name}</div>
            </div>
          </div>
        </td>
        <td>
        {payment?.email}
        </td>
        <td>{payment?.package} </td>
        <td>{payment?.price}</td>
        <td>
        <button
                  title="Delete"
                  className="rounded-md hover:bg-[#ED0058] bg-white p-2 hover:text-white text-black border border-[#ED0058] transition-all ease-in-out duration-300"
                >
                  <BiTrash />
                </button>
        </td>
      </tr>
        ))}
        
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistroy;