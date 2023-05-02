import React from 'react';
import { HiArrowUp, HiOutlineInformationCircle } from 'react-icons/hi';
import MyTimeTable from './MyTimeTable';
import { Link } from 'react-router-dom';
import Events from './Events';
import FeeTrx from './FeeTrx';
import AttendanceChart from './AttendanceChart';

const Dashboard = () => {
    return (
        <div className='min-h-screen w-[95%] mx-auto'>
            <header className='bg-gradient-to-r from-[#001b4b] to-[#0049c5] p-6 rounded-md mt-6'>
                <h2 className='font-semibold flex items-center text-white'><span>Hi, Ajay Kumar</span> <HiOutlineInformationCircle className='text-xl ml-2' /></h2>
                <p className='text-white pt-4'>Welcome back Ankit, your dashboard is ready. You have got notification.</p>
            </header>
            <h2 className='text-xl font-bold py-4 text-gray-900'>Analytics and Statistics</h2>
            <article className='grid grid-cols-12 gap-6'>
                {/* Time Tables  */}
                <div className='col-span-7 bg-white p-6 rounded-md shadow-md'>
                    <header className='flex justify-between pb-4'>
                        <h3 className='font-bold text-[#002e7f]'>Time Table</h3>
                        <select name="days" className='border-2 text-sm border-[#002e7f] border-opacity-30 rounded-md px-2'>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                    </header>
                    <MyTimeTable />
                </div>
                {/* Upcoming Events  */}
                <div className='col-span-5 bg-white p-6 shadow-md rounded-md'>
                    <header className='flex justify-between pb-4'>
                        <h3 className='font-bold text-[#002e7f]'>Upcoming Events</h3>
                        <Link className='flex items-center text-sm text-sky-600 link'>View All <HiArrowUp className='font-bold rotate-45 ml-1' /> </Link>
                    </header>
                    <Events />
                </div>
            </article>
            <article className='grid grid-cols-12 gap-6 mt-6'>
                {/* Fee Transaction  */}
                <div className='col-span-5 bg-white p-6 shadow-md rounded-md'>
                    <header className='flex justify-between pb-4'>
                        <h3 className='font-bold text-[#002e7f]'>Fee Transaction</h3>
                        <Link className='flex items-center text-sm text-sky-600 link'>View All <HiArrowUp className='font-bold rotate-45 ml-1' /> </Link>
                    </header>
                    <FeeTrx />
                </div>
                <div className='col-span-7 bg-white p-6 rounded-md shadow-md'>
                    <header className='flex justify-between pb-4'>
                        <h3 className='font-bold text-[#002e7f]'>Attendance Analytics</h3>
                        <select name="days" className='border-2 text-sm border-[#002e7f] border-opacity-30 rounded-md px-2'>
                            <option value="monday">Last 6 Months</option>
                        </select>
                    </header>
                    <AttendanceChart />
                </div>
            </article>
        </div>
    );
};

export default Dashboard;