import React from 'react'
import logo from '../assets/k-r8-logo.png'

function SignupForm({ isVisible, onClose }) {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'signupWrapper') onClose()
    }

    return (
        <main>
            <div className='fixed w-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-evenly items-center border border-slate-300 drop-shadow-md'>
                <div className='lg:w-[50%] h-full items-center flex justify-center' id='signupWrapper' onClick={handleClose}>
                    <div className='relative w-[500px] flex flex-col'>
                        <div className='bg-white p-2 mx-8 rounded-lg p-6 text-left'>
                            <button className='w-20 absolute top-1 right-3 text-black-300 text-xl place-self-end hover:scale-110 transition-all' onClick={() => onClose()}>X</button>
                            <div className='drop-shadow-md border-b mb-8 border-black'>
                                <h3 className='text-xl font-semibold mt-4 mb-4'>Signup</h3>
                            </div>
                            <form class='space-y-2' action='#'>
                                <div className='row flex justify-between'>
                                    <label for='firstName' className='block mb-2 text-md font-medium'></label>
                                    <input type='firstName' name='firstName' className='mr-1 bg-gray-50 border border-slate-300 text-md rounded-lg focus:bg-slate-100 focus:outline-secondarycol block w-full p-2.5' placeholder='First name' required />
                                    <label for='lastName' className='block mb-2 text-sm font-medium'></label>
                                    <input type='lastName' name='lastName' className='ml-1 bg-gray-50 border border-slate-300 text-md rounded-lg focus:bg-slate-100 focus:outline-secondarycol block w-full p-2.5' placeholder='Last name' required />
                                </div>
                                <label for='email' className='block mb-2 text-md font-medium'></label>
                                <input type='email' name='email' className='bg-gray-50 border border-slate-300 text-md rounded-lg focus:bg-slate-100 focus:outline-secondarycol block w-full p-2.5' placeholder='Email: e.g. johnwick@coder.com' required />
                                <label for='password' className='block mb-2 text-md font-medium'></label>
                                <input type='password' name='password' className='bg-gray-50 border border-slate-300 text-md rounded-lg focus:bg-slate-100 focus:outline-secondarycol block w-full p-2.5' placeholder='Unique password' required />
                                <div>
                                    <small className='text-xs'>
                                        People who use our service may have uploaded your contact information to Facebook.
                                        <a href='#' className='text-xs text-blue-700 hover:underline'> Learn more.</a>
                                    </small>
                                </div>
                                <div>
                                    <small className='text-xs'>By clicking Sign Up, you agree to our
                                        <a href='#' className='text-xs text-blue-700 hover:underline'> Terms</a>
                                        ,
                                        <a href='#' className='text-xs text-blue-700 hover:underline'> Private Policy </a>
                                         and
                                        <a href='#' className='text-xs text-blue-700 hover:underline'> Cookies Policy</a>
                                         . You may receive SMS Notifications from us and can opt out any time.
                                    </small>
                                </div>
                                <div className='flex justify-center'>
                                    <button type='submit' className='w-[60%] text-white bg-secondarycol hover:scale-105 transition-all hover:bg-secondaryLight focus:ring-4 focus:outline-none font-medium rounded-full text-md px-5 py-2.5 text-center'>Create your account</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                {/* Logo animation right-side screen */}
                <div className='hidden relative w-[50%] lg:flex h-full items-center justify-center bg-white border border-slate-300 drop-shadow-md'>
                    <img src={logo} className='w-60 h-60 bg-gradient-to-tr animate-bounce duration-1000 ease-in-out direction-alternate'></img>
                </div>
                <div className='w-[49.9%] h-[50%] hidden lg:flex absolute right-0 bottom-0 bg-black/10 backdrop-blur-lg border drop-shadow-md'></div>
            </div>
        </main>
    )
}

export default SignupForm