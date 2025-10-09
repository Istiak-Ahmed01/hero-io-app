import React, { useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const [activeNav, setActiveNav] = useState('home')

    const handleActiveNav = (nav) => {
        setActiveNav(nav)
    }

    return (
        <div>
            <Navbar activeNav={activeNav} handleActiveNav={handleActiveNav}></Navbar>
            <Outlet context={{handleActiveNav}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;