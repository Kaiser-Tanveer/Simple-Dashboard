import React from 'react';
import inr from '../../Assets/MenuIcons/inr.png';

const FeeTrx = () => {
    const feeData = [
        {
            name: "Exam Fee (March sem)",
            fee: "2000",
            trx: "83733930",
            date: "April 12, 2022"
        },
        {
            name: "Tuition Fee (March sem)",
            fee: "92000",
            trx: "83733930",
            date: "January 02, 2022"
        },
        {
            name: "Exam Fee (March sem)",
            fee: "2000",
            trx: "83733930",
            date: "April 12, 2022"
        },
        {
            name: "Tuition Fee (March sem)",
            fee: "92000",
            trx: "83733930",
            date: "January 02, 2022"
        },
    ]
    return (
        <article>
            {
                feeData.map((fee, i) => <div key={i}
                    className='text-xs pb-4'
                >
                    <div className='flex justify-between items-center'>
                        <ul>
                            <li className='list-item list-disc'>
                                <h5 className='font-bold'>{fee.name}</h5>
                            </li>
                        </ul>
                        <h5 className='flex items-center font-semibold text-[#002e7f]'>
                            <img src={inr} alt="" className='mr-1 w-[13px]' />
                            {fee.fee}</h5>
                    </div>
                    <p>Transaction Id-<span className='font-bold'>{fee.trx}</span>, Dated-<span className='font-bold'>{fee.date}</span></p>
                    <hr className='mt-4 border-1 border-gray-300' />
                </div>)
            }
        </article>
    );
};

export default FeeTrx;