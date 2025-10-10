import React from 'react';
import errorPageImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {


    return (
        <div className='flex flex-col items-center col-span-full gap-6 overflow-y-hidden p-20'>
            <img src={errorPageImg} alt="" />
            <h1 className='text-5xl font-semibold  col-span-full overflow-y-hidden'>Oops, page not found!</h1>
            <p className='text-[#627382] text-[20px] font-normal'>The page you are looking for is not available.</p>
            <Link
                to='/'
              
                
                className='text-[30px]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg col-span-full w-fit'>Go Back!</Link>

        </div>
    );
};

export default ErrorPage;