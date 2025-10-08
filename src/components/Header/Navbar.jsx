import React, { useState } from 'react';
import logoImg from '../../assets/logo.png'
import gitHubImg from '../../assets/gitHub.png'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home')

    const handleActiveNav = (nav) => {
        setActiveNav(nav)
    }

    const activeClass = 'text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] underline decoration-[#9F62F2]'
    const normalClass = 'text-[16px] font-semibold text-gray-700 hover:text-[#632EE3] transition'
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a onClick={() => handleActiveNav('home')} className={activeNav === 'home' ? activeClass : normalClass}>
                                    Home
                                </a>
                            </li>
                            <li><a onClick={() => handleActiveNav('apps')} className={activeNav === 'apps' ? activeClass : normalClass}>Apps</a></li>
                            <li><a onClick={() => handleActiveNav('installation')} className={activeNav === 'installation' ? activeClass : normalClass}>Installation</a></li>
                        </ul>
                    </div>
                    <img className='w-10 h-10' src={logoImg} alt="" />
                    <a className="btn btn-ghost text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a onClick={() => handleActiveNav('home')} className={activeNav === 'home' ? activeClass : normalClass}>
                                Home
                            </a>
                        </li>
                        <li><a onClick={() => handleActiveNav('apps')} className={activeNav === 'apps' ? activeClass : normalClass}>Apps</a></li>
                        <li><a onClick={() => handleActiveNav('installation')} className={activeNav === 'installation' ? activeClass : normalClass}>Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-lg font-bold"> <span><img src={gitHubImg} alt="" /></span>Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;