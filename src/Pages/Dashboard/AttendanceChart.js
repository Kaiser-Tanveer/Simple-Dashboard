import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AttendanceChart = () => {
    const AttendanceData = [
        {
            month: "Jan",
            days: 8
        },
        {
            month: "Feb",
            days: 15
        },
        {
            month: "Mar",
            days: 13
        },
        {
            month: "Apr",
            days: 25
        },
        {
            month: "May",
            days: 10
        },
        {
            month: "Jun",
            days: 14
        },
    ]
    return (
        <div className='overflow-hidden'>
            <LineChart width={480} height={280} data={AttendanceData}>
                <Line type="monotone" dataKey="days" stroke="#002e7f" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default AttendanceChart;