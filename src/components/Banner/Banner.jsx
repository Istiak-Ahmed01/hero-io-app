import React from 'react';
import playStoreImg from '../../assets/playStore.png'
import appStoreImg from '../../assets/appStore.png'
import bannerImg from '../../assets/hero.png'
import AppCard from '../../pages/AppCard/AppCard';
import { Link, useOutletContext } from 'react-router';

const Banner = ({ appsData }) => {
    const {handleActiveNav} =useOutletContext();

     const safeAppsData = appsData || [];
    return (
        <div className=''>
            <div className='bg-[#d2d2d2] space-y-8 pt-6'>
                <h1 className='text-7xl font-semibold text-center '>We Build <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-xl font-normal text-[#627382] text-center p-4 md:p-0'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center gap-4'>
                    <a
                        href='https://play.google.com/store/games?hl=en'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl px-4 py-2"><img src={playStoreImg} className='h-[16px] md:h-8' alt="" />Google Play</a>
                    <a
                        href='https://www.apple.com/app-store/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl px-4 py-2"><img src={appStoreImg} className='h-[16px] md:h-8' alt="" />App Store</a>
                </div>
                < img src={bannerImg} className='h-[344px] mx-auto p-4 md:p-0' ></img >


            </div>
            <section className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white space-y-7 p-8'>
                <h1 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-center gap-12 space-y-4'>
                    <div className='text-center'>
                        <p className='text-[16px] font-normal'>Total Downloads</p>
                        <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                        <p className='text-[16px] font-normal'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-[16px] font-normal'>Total Reviews</p>
                        <h1 className='text-[64px] font-extrabold'>906K</h1>
                        <p className='text-[16px] font-normal'>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-[16px] font-normal'>Active Apps</p>
                        <h1 className='text-[64px] font-extrabold'>132+</h1>
                        <p className='text-[16px] font-normal'>31 more will Launch</p>
                    </div>

                </div>
            </section>
            <section className='flex flex-col justify-center items-center gap-7 p-20 bg-[#d2d2d2]'>
                <h1 className='text-5xl font-bold text-center'>Trending Apps</h1>
                <p className='text-xl font-normal text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[600px] md:max-h-none overflow-y-auto '>

                    {
                        safeAppsData.slice(0,8).map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }

                </div>
               <Link
               to='allapps'
                onClick={()=>handleActiveNav("apps")} 
                 className='text-[16px]  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white px-4 py-2 rounded-lg'>Show All</Link>


            </section>
        </div>
    );
};

export default Banner;