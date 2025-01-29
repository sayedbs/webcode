import React from 'react'
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi"
import HeadingSection from '../../components/HeadingSection'

const tools = [
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

const ToolsSection = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>

        <HeadingSection heading="Lorem ipsum dolor sit amet, consectetur" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing" />

        {/* render tools hear */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6'>
            {
                tools.map((tool, index) =>(
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer">
                        <tool.icon className="text-blue-600 text-4xl mb-4"/>
                        <h3 className='text-lg font-bold text-gray-800'>{tool.title}</h3>
                        <p className='text-gray-600 mt-2'>{tool.description}</p>
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

export default ToolsSection