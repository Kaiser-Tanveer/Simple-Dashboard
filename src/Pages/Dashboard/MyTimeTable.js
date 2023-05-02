import React from 'react';
import profile from '../../Assets/Profile/profile.png';


const MyTimeTable = () => {
    const timeTableData = [
        {
            time: '11:00 Am - 12:00 Pm',
            subject: 'Hindi',
            img: profile,
            name: 'Ms. Reena Bhatiya'
        },
        {
            time: '12:00 Am - 01:00 Pm',
            subject: 'English',
            img: profile,
            name: 'Ms. Kajal Dvivedi'
        },
        {
            time: '01:00 Am - 02:00 Pm',
            subject: 'Physics',
            img: profile,
            name: 'Ms. Priya Kumari'
        },
        {
            time: '02:00 Am - 03:00 Pm',
            subject: 'Break',
            img: profile,
            name: 'N/A'
        },
        {
            time: '03:00 Am - 04:00 Pm',
            subject: 'Sports',
            img: profile,
            name: 'Mr. Ajay Ahalawat'
        },
        {
            time: '04:00 Am - 05:00 Pm',
            subject: 'Sports',
            img: profile,
            name: 'Mr. Ajay Ahalawat'
        }
    ]
    return (
        <table className='w-full text-gray-700'>
            <thead className='text-left font-semibold border-b border-gray-700 py-2'>
                <tr>
                    <th>Time</th>
                    <th>Subject Name</th>
                    <th>Teacher's Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    timeTableData.map((data, i) => <tr
                        key={i}>
                        <td className='text-gray-500 text-sm py-3'>{data.time}</td>
                        <td>{data.subject}</td>
                        <td>
                            <div className='flex items-center'>
                                <img src={data.img} alt="" className='w-8' />
                                <p className='ml-2 text-gray-500'>{data.name}</p>
                            </div>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default MyTimeTable;