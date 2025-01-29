import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebookF } from "react-icons/fa";

const CompanyLogos = () => {

    const logos = [
        { icon: FaApple, name: "Apple" },
        { icon: FaGoogle, name: "Google" },
        { icon: FaAmazon, name: "Amazon" },
        { icon: FaMicrosoft, name: "Microsoft" },
        { icon: FaFacebookF, name: "FacebookF" },
    ]

  return (
    <div className='bg-colorBg'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <HeadingSection subheading="Quisque sit amet " heading="Integer sagittis vitae placerat augue gravida" description="Nullam nibh tellus, venenatis dignissim vehicula sed, pellentesque commodo ipsum. Aliquam vitae accumsan urna, ut facilisis lectus" />

            {/* logo container */}
            <div className='relative overflow-hidden border-y-[1px] p-8'>
                <div className='flex justify-around items-center md:space-x-14 space-x-8 animate-scroll'>
                    {
                        logos.map((logo, index) =>(
                            <div key={index} className="flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scroll-110 transition transform">
                                <logo.icon className='text-blue-500 text-4xl' title={logo.name} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    </div>
  )
}

export default CompanyLogos