import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const Allapps = () => {
    const appsData = useLoaderData()
    // console.log(appsData)
    return (
        <div className='bg-[#d2d2d2] p-20 space-y-10'>
            <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-[20px] font-normal text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className=' flex justify-between'>
                <h3 className='text-2xl font-semibold'>{appsData.length} Apps Found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="search Apps" />

                </label>


            </div>
            {/* App card */}
            <section className='grid grid-cols-4 gap-4'>
                {
                    appsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </section>
        </div>
    );
};

export default Allapps;