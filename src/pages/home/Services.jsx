import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi"

const Services = () => {

    const services = [
        {
            icon: FiSettings,
            title: "customizable settings",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        },
        {
            icon: FiCode,
            title: "customizable settings",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        },
        {
            icon: FiSmartphone,
            title: "customizable settings",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        },
        {
            icon: FiCloud,
            title: "customizable settings",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        }
    ]

  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <HeadingSection subheading="Services" heading="Services placerat augue gravida" description="Nullam nibh tellus, venenatis dignissim vehicula sed, pellentesque commodo ipsum. Aliquam vitae accumsan urna, ut facilisis lectus" />

        {/* Services container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:w-4/5 mx-auto gap-8 mb-16'>
            {
                services.map((service, index) =>(
                    <div key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg hover:rounded-md transition cursor-pointer">
                        <service.icon className="text-blue-600 text-4xl mb-4" />
                        <p className='text-gray-600 mt-2'>{service.description}</p>
                    </div>
                ))
            }

        </div>

        {/* btn */}
        <div className='text-center pt-4'>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>Explore More</button>
        </div>

    </div>
  )
}

export default Services