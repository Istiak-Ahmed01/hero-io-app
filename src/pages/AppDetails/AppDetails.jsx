import React from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/reviewImg.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

import { useLoaderData, useOutletContext, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const { formatDownload } = useOutletContext()

    const singleApp = data.find(app => app.id === appId)
    // console.log(singleApp)
    const { image, title, downloads, ratingAvg, reviews, companyName, size, description, } = singleApp
    return (
        <div className='p-14 md:p-20 space-y-10'>
            <div className='flex flex-col md:flex-row gap-13 '>
                <img className='h-[350px]' src={image} alt="" />
                <div className='space-y-5 flex-1'>
                    <h1 className='text-[32px] font-bold'>{title}</h1>
                    <p className='text-[#627382] text-[20px]'>Developed by <span className='text-[#632EE3] font-semibold'>{companyName}</span></p>
                    <div className='border-t-2 border-gray-400 w-full '></div>
                    <section className='flex flex-col md:flex-row gap-15'>
                        <div>
                            <img className='' src={downloadImg} alt="" />
                            <p className='text-[16px] font-normal'>Downloads</p>
                            <h1 className='text-[40px] font-extrabold'>{formatDownload(downloads)}</h1>
                        </div>
                        <div>
                            <img className='' src={ratingImg} alt="" />
                            <p className='text-[16px] font-normal'>Average Ratings</p>
                            <h1 className='text-[40px] font-extrabold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='' src={reviewImg} alt="" />
                            <p className='text-[16px] font-normal'>Total Reviews</p>
                            <h1 className='text-[40px] font-extrabold'>{formatDownload(reviews)}</h1>
                        </div>
                    </section>
                    <button className='px-4 py-2 bg-green-300 text-white rounded-lg' >Install Now ({`${size} MB`})</button>
                </div>

            </div>
            <div className='border-t-2 border-gray-400 w-full '></div>
            <section className='space-y-6'>
                <h1 className='text-2xl font-semibold'>Ratings</h1>



                <div className='w-full'>
                    <ResponsiveContainer width="90%" height={300}>
                        <BarChart
                            data={singleApp.ratings}
                            layout='vertical'
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#f97316" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>
            <div className='border-t-2 border-gray-400 w-full '></div>
            <section className='space-y-6'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-[20px] font-normal text-[#627382]'>{description}</p>

            </section>


        </div>
    );
};

export default AppDetails;