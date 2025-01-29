import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from '../../components/HeadingSection';

const sldata = [
    {
        id: 1,
        name: "Jhon morgan",
        img: "/images/members/person3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
        id: 2,
        name: "Jhon morgan",
        img: "/images/members/person3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
        id: 3,
        name: "Jhon morgan",
        img: "/images/members/person3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    }
]

const Testslider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

  return (
    <div>
        <HeadingSection heading="Slick Slider" subheading="Slick Slider Description" description="" className="border-t-2 border-blue-600" />
    <div className='w-3/4 mx-auto'>
        <div className='mt-20 mb-20'>
        <Slider {...settings}>
            {
              sldata.map((data, index) =>(
                <div key={index} className="text-center bg-white text-black shadow-lg">
                    <div className='rounded-t-xl bg-indigo-500 flex items-center justify-center px-4 py-5'>
                        <img src={data.img} alt='' className='w-[30] h-[30] rounded-full' />
                    </div>
                    {/* <div className='flex flex-row items-center justify-center gap-4 p-4'> */}
                    <div className='py-4 px-4'>
                        <h3>{data.name}</h3>
                        <p className='py-4'>{data.description}</p>
                        {/* contact btm */}
                        <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Read More</button>
                    </div>
                </div>
              )) 
            }
            </Slider>
        </div>
    </div>
    </div>
  )
}

export default Testslider