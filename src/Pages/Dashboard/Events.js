import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    const eventsData = [
        {
            title: "'Lohri Bash'- Sharry Mann and Akhil",
            date: "March 23, 2022",
            detail: "Sports ground No.-3, For ticketing and front row seat booking contact Mr. Sahil @ +91-8456379267"
        },
        {
            title: "Singing Competition (Female)",
            date: "March 24, 2022",
            detail: "Auditorium No.-1, For participating register online through portal, or contact Mr. Manoj in room 203, DSA"
        },
        {
            title: "Inter Zonal Women Badminton Competition",
            date: "March 23 - March 26",
            detail: "DSW ground,register through online portal, starts 09:00 Am till afternoon 03:00 Pm"
        },
        {
            title: "Inter Zonal Women Badminton Competition",
            date: "March 23 - March 26",
            detail: "DSW ground,register through online portal, starts 09:00 Am till afternoon 03:00 Pm"
        },
    ]
    return (
        <article>
            {
                eventsData.map((data, i) => <div
                    key={i}
                    className='py-3'>
                    <div className='flex justify-between text-xs'>
                        <ul>
                            <li className='font-bold list-disc'>{data.title}</li>
                        </ul>
                        <p>{data.date}</p>
                    </div>
                    <div className='relative'>
                        <p className='text-xs'>{data.detail}</p>
                        <p className='absolute bottom-[2%] right-0 link text-sky-600 text-xs text-right'>Know more</p>
                    </div>
                </div>)
            }
        </article>
    );
};

export default Events;