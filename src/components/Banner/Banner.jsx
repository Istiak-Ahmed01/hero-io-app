import React from 'react';
import playStoreImg from '../../assets/playStore.png'
import appStoreImg from '../../assets/appStore.png'
import bannerImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-[#d2d2d2] space-y-8 pt-6'>
                <h1 className='text-7xl font-semibold text-center '>We Build <br />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='text-xl font-normal text-[#627382] text-center '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center gap-4'>
                    <a
                        href='https://play.google.com/store/games?hl=en'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img src={playStoreImg} alt="" />Google Play</a>
                    <a
                        href='https://www.apple.com/app-store/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img src={appStoreImg} alt="" />App Store</a>
                </div>
                < img src={bannerImg} className='h-[344px] mx-auto' ></img >


            </div>
            <section className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white space-y-7 p-8'>
                <h1 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center gap-12 space-y-4'>
                    <div className='text-center'>
                        <p className='text-[16px] font-normal'>Total Downloads</p>
                        <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                        <p className='text-[16px] font-normal'>21% more than last month</p>
                    </div>
                    <div  className='text-center'>
                        <p className='text-[16px] font-normal'>Total Reviews</p>
                        <h1 className='text-[64px] font-extrabold'>906K</h1>
                        <p className='text-[16px] font-normal'>46% more than last month</p>
                    </div>
                    <div  className='text-center'>
                        <p className='text-[16px] font-normal'>Active Apps</p>
                        <h1 className='text-[64px] font-extrabold'>132+</h1>
                        <p className='text-[16px] font-normal'>31 more will Launch</p>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default Banner;