import React from 'react';
import { HiOutlineBell, HiSearch } from 'react-icons/hi';
import profile from '../../Assets/Profile/profile.png';
import logOut from '../../Assets/MenuIcons/logOut.png';

const Navbar = () => {
    return (
        <header className='py-2 flex justify-between items-center'>
            <div className='flex relative'>
                <i className='absolute top-2 right-2'><HiSearch className='text-2xl text-gray-400' /></i>
                <input type="text" placeholder="Search" className="input h-10 rounded-lg input-bordered" />
            </div>
            <div className='flex gap-2 items-center relative'>
                <HiOutlineBell className='text-2xl' />
                <span className="badge absolute badge-sm border-none rounded-full indicator-item bg-[#FA2F19] text-white top-1 left-3 font-bold p-1">5</span>
                <h5 className='text-right font-semibold px-2'>Rajesh Kumar <br />
                    <span className='text-[#0075bc]'>7th A</span></h5>
                <img src={profile} alt="profileIcon" className='w-10 rounded-full' />
                <img src={logOut} alt="logOutIcon" className='w-6 ml-2' />
            </div>
        </header>
    );
};

export default Navbar;