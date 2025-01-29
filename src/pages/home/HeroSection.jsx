import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import bannerImg from '../../assets/banner.png'
import { useState } from 'react';

const HeroSection = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = ()=> setShowModal(true);
    const closeModal = ()=> setShowModal(false);

  return (
    <div className='bg-colorBg'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>

            {/* Left side */}
            <div className='lg:w-1/2 text-center lg:text-left'>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>This button will have different sizes on different</h1>
                <p className='text-lg text-gray-600 mb-6'>Buttons allow the user to take actions or make choices. Buttons allow the user to take actions or make choices.</p>
                <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-start'>
                    <button className='flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md space-x-2 hover:bg-blue-700 transition'>
                        <span className='pr-2'>Get Stated</span>
                        <FiArrowRight />
                    </button>
                    <button className='border border-blur-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition'>Contact Us</button>
                </div>
            </div>

            {/* Right side */}
            <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end'>
                <div className='relative group transition z-0'>
                    <img src={bannerImg} alt='banner img' className='rounded-lg shadow-lg' />
                    <button onClick={openModal} className='absolute inset-0 flex justify-center items-center group-hover:opacity-75'>
                        <FaRegPlayCircle className='text-white text-5xl hover:text-blue-600 transition' />
                    </button>
                </div>
            </div>

            {/* modal */}
            {
                showModal && (<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <div className='bg-white rounded-lg p-5 shadow-lg relative max-w-xl w-full'>
                        <button className='absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full' onClick={closeModal}>&times;</button>
                        <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/nmZfTdRXpOw?si=kzoHgFCdSeAjCnqp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>                    
                </div>)
            }

        </div>
        
    </div>
  )
}

export default HeroSection