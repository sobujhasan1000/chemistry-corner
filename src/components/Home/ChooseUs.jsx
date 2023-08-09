import React from 'react';
import choosephoto from '../../assets/choose us2.jpg'
import { FaBandcamp, FaUser, FaWeixin,  } from 'react-icons/fa';
const ChooseUs = () => {
    return (
        <div className='lg:flex '>
            <div className='lg:w-2/3'>
                <div className='my-8 text-center'>
                <h1 className='text-4xl mb-4 font-semibold'>Why choose chemistry corner</h1>
                <p>Here’s why lots of people choose our website.</p>
                </div>
                <div className='lg:flex p-6 text-center'>
                       <div className='p-4'>
                         <h1 className='text-3xl p-2'> <span className='flex items-center justify-center mb-4 text-pink-300 text-4xl'><FaUser /></span> Simple to Use</h1>
                         <p>Loven is very easy to use - just choose your and your partner’s gender, age, and location, and you’re all set!</p>
                     </div>
                       <div className='p-4'>
                         <h1 className='text-3xl p-2'><span className='flex items-center justify-center mb-4 text-pink-300 text-4xl'><FaBandcamp /></span>Smart Matching</h1>
                         <p>Our matching system is based on geolocation and interests. It helps you find the best people to meet or spend time with.</p>
                     </div>
                       <div className='p-4'>
                         <h1 className='text-3xl p-2'> <span className='flex items-center justify-center mb-4 text-pink-300 text-4xl'><FaWeixin/></span>Cool Community</h1>
                         <p>Besides being #1 dating service, we have a supportive and understanding community that’s always ready to help.</p>
                     </div>
                </div>
            </div>
            <div className='lg:w-1/3'>
                <img src={choosephoto} alt="" />
            </div>
        </div>
    );
};

export default ChooseUs;