import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Container from '../../components/shared/Container';

const MemberShip = () => {
    const packages=[
        {
          "packageName": "7 Day Free Trial",
          "packInfo": "$15.00 Now And Then $30.00 Per Month..",
          "price": 0,
          "packInclude": ["Feature X", "Feature Y","Feature R"]
        },
        {
          "packageName": "Bronze",
          "packInfo": "$15.00 Now And Then $40.00 Per Month.",
          "price": 24.99,
          "packInclude": ["Feature A", "Feature B", "Feature C"]
        },
        {
          "packageName": "Silver",
          "packInfo": "$15.00 Now And Then $50.00 Per Month.",
          "price": 14.99,
          "packInclude": ["Feature P", "Feature Q", "Feature R"]
        },
        {
          "packageName": "Gold",
          "packInfo": "$15.00 Now And Then $60.00 Per Month..",
          "price": 29.99,
          "packInclude": ["Feature Alpha", "Feature Beta","Feature R"]
        }
      ]
    return (
        <Container className='my-10 bg-[#bbd2ec] text-black'>
            <div className='text-center bg-[#f1f7fe] py-6'>
                <h1 className='text-[40px] font-bold'>Membership Levels</h1>
            <p>Our dating platform is like a breath of fresh air. Clean and trendy design with ready <br /> to use features we are sure you will love.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#f1f7fe]'>
                {packages.map((pack,i)=>(
                    <div className='gap-2 bg-[#fff] text-center hover:shadow-2xl' key={i}>
                        <h1 className='text-2xl font-bold py-8'>{pack.packageName}</h1>
                        <p className='px-10 py-8 bg-[#eca9c2] text-xl'>{pack.packInfo}</p>
                        <h1 className='text-2xl font-bold py-2'>${pack.price}</h1>
                        <span className='divider'></span>
                        <ul>
        {pack.packInclude.map((feature, i) => (
          <li className=' text-xl' key={i}><FaCheckCircle className='text-blue-400 mb-[-20px] ml-[50px]'/>{feature} <span className='divider px-4'></span></li>
          
        ))}
      </ul>
      <button className='btn bg-[#ED0058] mb-4 hover:bg-[#eca9c2] shadow-xl'>select plan</button>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default MemberShip;
