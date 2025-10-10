import React, { useState, useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import { ToastContainer, toast } from 'react-toastify';


const Installations = () => {
    const data = useLoaderData();
    const { formatDownload } = useOutletContext();


    const [installedApps, setInstalledApps] = useState([]);


    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        const filtered = data.filter(app => storedIds.includes(app.id));
        setInstalledApps(filtered);
    }, [data]);

    const unInstall = (id) => {
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updatedIds = storedIds.filter(appId => appId !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedIds));

        setInstalledApps(prev => prev.filter(app => app.id !== id));
    };

    const notify = () => toast("App Uninstalled from your device");
    const [sort, setSort] = useState("Sort")

const sortBySize =()=>{

  const sortApps = [...installedApps].sort((a,b)=>a.size-b.size)
  setInstalledApps(sortApps)

}
const sortByRatings =()=>{

  const sortApps = [...installedApps].sort((a,b)=>a.ratingAvg-b.ratingAvg)
  setInstalledApps(sortApps)

}
const sortByDownloads =()=>{

  const sortApps = [...installedApps].sort((a,b)=>a.downloads-b.downloads)
  setInstalledApps(sortApps)

}

    return (
        <div className='p-20 space-y-5'>
            <ToastContainer />
            <h1 className='text-5xl font-bold text-center '>Your Installed Apps</h1>
            <p className='text-[20px] font-normal text-[#627382] text-center'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>{installedApps.length} Apps Found</h1>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">{sort} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => {setSort('Sort By Size');sortBySize()}}>Sort By Size </a></li>
                        <li><a onClick={() => {setSort('Sort By Ratings');sortByRatings()}}>Sort By Ratings </a></li>
                        <li><a onClick={() => {setSort('Sort By Downloads');sortByDownloads()}}>Sort By Downloads </a></li>
                    </ul>
                </div>
            </div>

            {installedApps.length === 0 && (
                <p className="text-center text-gray-500">No apps installed yet.</p>
            )}

            {installedApps.map(app => {
                const { id, image, title, downloads, ratingAvg, size } = app;
                return (
                    <div
                        key={id}
                        className='bg-white p-7 shadow-md rounded-lg space-y-3 flex justify-between'
                    >
                        <div className='flex gap-4'>
                            <img className='h-16 w-16 object-cover rounded' src={image} alt={title} />
                            <div>
                                <h6 className='text-[20px] font-medium'>{title}</h6>
                                <div className='flex justify-between gap-4 mt-2'>
                                    <button className='text-green-300 flex items-center gap-1.5 shadow-2xl bg-[#f1f5e8] px-2 py-1 rounded-lg'>
                                        <img className='h-4 w-4' src={downloadImg} alt="" />
                                        {formatDownload(downloads)}
                                    </button>
                                    <button className='text-orange-300 flex items-center gap-1.5 px-2 py-1 shadow-2xl bg-[#fff0e1] rounded-lg'>
                                        <img className='h-4 w-4' src={ratingImg} alt="" />
                                        {ratingAvg}
                                    </button>
                                    <p>{size} MB</p>
                                </div>
                            </div>
                        </div>


                        <button
                            onClick={() => { unInstall(id); notify() }}
                            className='px-2 py-1 h-11 text-[16px] text-white bg-green-300 hover:bg-green-400 rounded-xl'>
                            Uninstall


                        </button>


                    </div>
                );
            })}
        </div>
    );
};

export default Installations;
