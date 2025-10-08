import React from 'react';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app

    const formatDownload = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    
    }
    return (
        <div className=' bg-white p-7 shadow-md rounded-lg space-y-3'>
            <img className=' h-[316px]' src={image} alt="" />
            <h6 className='text-[20px] font-medium'>{title}</h6>
            <div className='flex justify-between'>
                <button className='text-green-300 flex items-center gap-1.5  shadow-2xl bg-[#f1f5e8] px-2 py-1 rounded-lg'><img className='h-4 w-4' src={downloadImg} alt="" />{formatDownload(downloads)}</button>
                <button className='text-orange-300 flex items-center gap-1.5 px-2 py-1  shadow-2xl bg-[#fff0e1] rounded-lg'><img className='h-4 w-4' src={ratingImg} alt="" />{ratingAvg}</button>
            </div>


        </div>
    );
};

export default AppCard;