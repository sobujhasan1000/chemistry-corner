import React from 'react';

const NewblogPosts = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-8 text-xl'>New Posts</h1>
            <div className='flex lg: h-32 p-6 ml-6 hover:shadow-2xl'>
                <img className='rounded-md' src="https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg" alt="" />
                <div className='font-bold p-2'>
                    <h1>Can You Text Your Way into a Relationship?</h1>
                    <h2 className='text-red-200'>May 12, 2021</h2>
                </div>
            </div>
        </div>
    );
};

export default NewblogPosts;