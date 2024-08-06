import React from 'react'
import logo from '../assets/k-r8-logo.png'


function LoginForm({ isVisible, onClose }) {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'loginWrapper') onClose()
    }

    return (
        <main>
            <div className='fixed w-full inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-evenly items-center border border-slate-300 drop-shadow-md' id='loginWrapper' onClick={handleClose}>
                <div className='lg:w-[50%] flex justify-center'>
                <div className='w-[500px] flex flex-col'>
                    
                    <button className='w-20 text-white text-xl place-self-end hover:scale-150 transition-all' onClick={() => onClose()}>X</button>
                    <div className='bg-white p-2 mx-8 rounded-lg p-6 text-left'>
                        <h3 className='text-xl font-semibold mb-5'>Login</h3>
                        <form class='space-y-6' action='#'>
                            <div>
                                <label for='email' className='block mb-2 text-sm font-medium'>Your email</label>
                                <input type='email' name='email' className='bg-gray-50 border border-slate-300 text-sm rounded-lg focus:bg-slate-100 focus:outline-secondarycol block w-full p-2.5' placeholder='name@company.com' required />
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

export default LoginForm