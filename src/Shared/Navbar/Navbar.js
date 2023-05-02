import React from 'react';
import { HiOutlineBell, HiOutlineLogout } from 'react-icons/hi';
import profile from '../../Assets/Profile/profile.png';

const Navbar = () => {
    return (
        <header className='py-2 flex justify-between items-center'>
            <div>
                <input type="text" placeholder="Search" className="input h-10 rounded-lg input-bordered" />
            </div>
            <div className='flex gap-2 items-center relative'>
                <HiOutlineBell className='text-2xl' />
                <span className="badge absolute badge-sm border-none rounded-full indicator-item bg-orange-600 top-1 left-3 font-bold p-1">5</span>
                <h5 className='text-right font-semibold px-2'>Rajesh Kumar <br />
                    <span className='text-[#0075bc]'>7th A</span></h5>
                <img src={profile} alt="" className='w-10 rounded-full' />
                <HiOutlineLogout className='text-4xl text-orange-600' />
            </div>
        </header>
    );
};

export default Navbar;