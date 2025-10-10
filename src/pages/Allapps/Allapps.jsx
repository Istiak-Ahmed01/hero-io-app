import React, { useState } from 'react';
import { Link, useLoaderData, useOutletContext } from 'react-router';
import AppCard from '../AppCard/AppCard';
import NoAppImg from '../../assets/App-Error.png'

const Allapps = () => {
    const appsData = useLoaderData()
    // console.log(appsData)


    const [search, setSearch] = useState('')
    const filteredApps = appsData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())

    )
    const { handleActiveNav } = useOutletContext()


    return (
        <div className='bg-[#d2d2d2] p-10 md:p-20 space-y-10'>
            <h1 className='text-5xl font-bold text-center'>Our All Applications</h1>
            <p className='text-[20px] font-normal text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className=' flex justify-between'>
                <h3 className='text-2xl font-semibold'>({search?filteredApps.length:appsData.length}) Apps Found</h3>
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
                    <input type="search" className="grow" placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </label>


            </div>
            {/* App card */}
            <section className='grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[600px] md:max-h-none overflow-y-auto bg-[#d2d2d2]'>
                {
                    search ?
                        filteredApps.map(app => <AppCard key={app.id} app={app}></AppCard>) :
                        appsData.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }

                {
                    search && filteredApps.length === 0 && (
                        <>
                        <div className='flex flex-col items-center col-span-full gap-6 overflow-y-hidden'>
                                                    <img src={NoAppImg} alt="" />
                            <h1 className='text-5xl font-semibold  col-span-full overflow-y-hidden'>OPPS!! APP NOT FOUND</h1>
                            <p className='text-[#627382] text-[20px] font-normal'>The App you are requesting is not found on our system.  please try another apps</p>
                            <Link
                                to='/allapps'
                                onClick={() => {handleActiveNav("apps")
                                    setSearch('')}
                                }
                                className='text-[30px]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg col-span-full w-fit'>Show All</Link>

                        </div>
                        </>
                    )



                }


            </section>

        </div>
    );
};

export default Allapps;