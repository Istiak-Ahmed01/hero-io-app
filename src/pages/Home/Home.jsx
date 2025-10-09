import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
   const appsData= useLoaderData()
   console.log(appsData)
    return (
        <div>
            <Banner appsData={appsData}></Banner>
        </div>
    );
};

export default Home;