import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import schoolLogo from '../Assets/Logos/School-Logo.png';
import campusLogo from '../Assets/Logos/Campus_logo.png';
import Dashboard from '../Pages/Dashboard/Dashboard';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
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
                <ul className="menu p-4 pb-0 w-80 text-base-content">
                    <div className='w-[90%] bg-base-200 rounded-md'>
                        <div className='flex flex-row items-center p-2'>
                            <img src={schoolLogo} alt="" className='w-14 rounded-full' />
                            <h4 className='text-[#0045bc] font-bold ml-2'>Paresh International School, Hyderabad</h4>
                        </div>
                    </div>
                    <li><h3 className='font-bold text-2xl pb-6 text-[#002e7f]'>Dashboard</h3></li>
                    <p className='text-gray-500 text-[14px]'>My Tools</p>
                    <li><Link>Assignments</Link></li>
                    <li><Link>Attendance</Link></li>
                    <li><Link>Grades</Link></li>
                    <li><Link>Time Table</Link></li>
                    <li><Link>Fees</Link></li>
                    <li><Link>Profile</Link></li>
                    <li><Link>Feedback</Link></li>
                    <li><Link>Change Password</Link></li>
                    <li><Link>Dairy</Link></li>
                    <li><Link>Transport</Link></li>
                    <li><Link>School Gallery</Link></li>
                    <hr className='border-1 border-gray-400 w-4/5 mr-auto' />
                    <Link className='text-gray-500 pt-2'>Help & Support</Link>
                    <Link className='text-gray-500 py-4'>Terms & Services</Link>
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