import React from 'react'
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router';
import { useForm } from "react-hook-form"

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-5'>
        <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Please Login</h2>

            {/* registetion from */}
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                <div>
                    <lebel className='block mb-2 text-sm font-medium text-gray-700'>Email: </lebel>
                    <input 
                    {...register("email", { 
                        required: "Email is Required", pattern: { 
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"
                        } 
                    })} 
                    type="email" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                     {errors.email && <p className='text-sm italic text-red-500 mt-2'>{errors.email.message}</p>}
                    {/* <input
                            {...register("email", {
                                required: "Email is required", pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"
                                }
                            })}
                            type="email"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                        {errors.email && <p className='text-sm italic text-red-500 mt-2'>{errors.email.message}</p>} */}
                </div>
                <div>
                    <lebel className='block mb-2 text-sm font-medium text-gray-700'>Password:</lebel>
                    <input
                    {...register("password", { 
                        required: "Password is Required", minLength: { 
                            value: 6, message: "Password must be at least 6 characters"
                        } 
                    })} 
                    type="password" className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`} />
                    {errors.password && <p className='text-sm italic text-red-500 mt-2'>{errors.password.message}</p>}
                </div>
                <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'>Login</button>
            </form>

            {/* social link */}
            <div className='text-center space-y-4'>
                <p>Or Login with</p>

                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600'>
                        <FaGoogle />
                        <span>Google</span>
                    </button>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900'>
                        <FaGithub />
                        <span>GitHub</span>
                    </button>
                    <button className='flex items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        <FaFacebook />
                        <span>Facebook</span>
                    </button>
                </div>

                <p className='text-sm text-center text-gray-600'>Do not have an account? Please <Link to="/register" className='text-blue-600 hover:underline'>Sign up</Link></p>
            </div>

        </div>
    </div>
  )
}

export default Login