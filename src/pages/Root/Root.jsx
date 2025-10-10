import React, { useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';


const Root = () => {

    const [activeNav, setActiveNav] = useState('home')

    const handleActiveNav = (nav) => {
        setActiveNav(nav)
    }

        const formatDownload = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
        
    
    }

    const navigation=useNavigation()

    return (
        <div>
            <Navbar activeNav={activeNav} handleActiveNav={handleActiveNav}></Navbar>

            {(navigation.state==="loading")?(<Spinner></Spinner>):
           ( <Outlet context={{handleActiveNav,formatDownload}}></Outlet>)}
            <Footer></Footer>
        </div>
    );
};

export default Root;