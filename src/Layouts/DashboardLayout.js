import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import schoolLogo from '../Assets/Logos/School-Logo.png';
import campusLogo from '../Assets/Logos/Campus_logo.png';
import Dashboard from '../Pages/Dashboard/Dashboard';
import { Link } from 'react-router-dom';
import assignment from '../Assets/MenuIcons/Assignments.png';
import Attendance from '../Assets/MenuIcons/attendance.png';
import grade from '../Assets/MenuIcons/grade.png';
import time from '../Assets/MenuIcons/time.png';
import fee from '../Assets/MenuIcons/fee.png';
import profile from '../Assets/MenuIcons/profile.png';
import feedback from '../Assets/MenuIcons/feedback.png';
import pass from '../Assets/MenuIcons/pass.png';
import diary from '../Assets/MenuIcons/Diary.png';
import transport from '../Assets/MenuIcons/transport.png';
import gallery from '../Assets/MenuIcons/gallery.png';
import terms from '../Assets/MenuIcons/terms.png';
import help from '../Assets/MenuIcons/help.png';

const DashboardLayout = () => {
    const menuItems = [
        {
            icon: assignment,
            menu: 'Assignment'
        },
        {
            icon: Attendance,
            menu: 'Attendance'
        },
        {
            icon: grade,
            menu: 'Grades'
        },
        {
            icon: time,
            menu: 'Time Table'
        },
        {
            icon: fee,
            menu: 'Fees'
        },
        {
            icon: profile,
            menu: 'Profile'
        },
        {
            icon: feedback,
            menu: 'Feedback'
        },
        {
            icon: pass,
            menu: 'Change Password'
        },
        {
            icon: diary,
            menu: 'Diary'
        },
        {
            icon: transport,
            menu: 'Transport'
        },
        {
            icon: gallery,
            menu: 'School Gallery'
        },
    ]
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <Navbar />
                <div className='bg-base-200'>
                    <Dashboard />
                </div>
                <Footer />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 pb-0 pr-0 w-80 text-base-content">
                    <div className='w-[90%] bg-base-200 rounded-md'>
                        <div className='flex flex-row items-center p-2'>
                            <img src={schoolLogo} alt="" className='w-14 rounded-full' />
                            <h4 className='text-[#0045bc] font-bold ml-2'>Paresh International School, Hyderabad</h4>
                        </div>
                    </div>
                    <li><h3 className='font-bold text-2xl pb-6 text-[#002e7f]'>Dashboard</h3></li>
                    <p className='text-gray-500 text-[14px]'>My Tools</p>
                    {
                        menuItems.map(menu => <li><Link className='flex flex-row'>
                            <img src={menu.icon} alt="" className='w-6' /><span>{menu.menu}</span>
                        </Link></li>)
                    }
                    <hr className='border-1 border-gray-400 w-4/5 mr-auto' />
                    <Link className='text-gray-500 pt-2 flex'><img src={help} alt="" className='w-6 mr-2' /><span>Help & Support</span></Link>
                    <Link className='text-gray-500 py-4 flex'><img src={terms} alt="" className='w-6 mr-2' /><span>Terms & Services</span></Link>
                    <li>
                        <div className='w-[90%] mt-16'>
                            <div className='flex flex-row items-center p-2'>
                                <img src={campusLogo} alt="" className='w-14 rounded-full' />
                                <h4 className='text-gray-500 ml-2'>version 1.12.234</h4>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;