import React from 'react';
import girl from '../assets/girl.png';
import camera from '../assets/camera-icon.svg';

export const Profile = () => {
    return (
        <div className="flex flex-col h-[812px] items-center justify-center bg-white">
            <div className='flex items-center bg-white w-[375px] h-20 border border-[#00000007]'>
                <p className='ms-3 font-normal text-[18px] text-[#1D2226]'>Account Settings</p>
            </div>
            <div className="flex h-screen w-[370px] flex-col gap-6 border border-gray-300 bg-[#F7F8F9] shadow-sm p-6">
                <div className="flex items-start gap-5">
                    <div className='relative'>
                        <img className='h-20 w-20 rounded-full' src={girl} alt="picture" />
                        <span className='absolute right-0 bottom-3'> <img className='h-5 w-5 rounded-full' src={camera} alt="picture" /></span>
                    </div>
                    <div>
                        <p className='text-[#1D2226] font-semibold text-[15px]'>Marry Doe</p>
                        <p className='text-[#1D2226] text-[14px]'>Marry@Gmail.com</p>
                    </div>

                </div>
                <div>
                    <p className=' text-[#1D2226] text-[14px] text-justify'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
                <div className="-mx-6 border-1 border-dashed border-gray-400"></div>
                <div className="-mx-6 border-1 border-dashed border-gray-400 mt-75"></div>
            </div>
        </div>
    );
}
