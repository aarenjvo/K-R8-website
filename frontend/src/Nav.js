import { Fragment, useState } from 'react'
import logo from './assets/k-r8-logo.png'
import LoginForm from './users/Login'
import SignupForm from './users/Signup'
import './App.css'

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    const handleSignup = () => {
        setShowSignup(true)
        setIsMenuOpen(false)
    }

    const handleLogin = () => {
        setShowLogin(true)
        setIsMenuOpen(false)
    }

    return (
        <Fragment>
        <div className="w-full h-full absolute bg-white">
            <header className="flex justify-between rounded-t-lg text-slate-950 md:pt-3 md:pb-10 md:px-5 pb-5 px-0 mx-0 w-full bg-white drop-shadow-md border border-slate-300">
                <div className="flex relative lg:top-3 top-2 items-center xl:items-start">
                    <a href="#">
                        <img src={logo} alt="logo" className="hidden xl:block md:inline-flex md:w-12 md:h-12 flex hover:scale-105 transition-all hover:animate-wiggle hover:duration-1000 hover:delay-1000 hover:ease-in-out hover:direction-alternate" />
                    </a>
                </div>
                <nav className="flex flex-col w-5/12">
                    <ul className="hidden relative md:top-2 xl:flex flex-row items-center font-semibold text-base gap-2 justify-center">
                        <li className="p-3 hover:bg-slate-100 rounded-full transition-all cursor-pointer">Teachers</li>
                        <li className="p-3 hover:bg-slate-100 rounded-full transition-all cursor-pointer">Students</li>
                    </ul>
                    <div className="flex w-full h-10 justify-center items-center p-auto xl:mt-10 mt-5 drop-shadow-md shrink-0" id="searchBar">
                        <i className="bx bx-search absolute left-2 text-2xl text-secondarycol"></i>
                        <input type="text" placeholder="Search..." className="h-16 w-full py-2 pl-8 rounded-full border border-slate-300 focus:bg-slate-100 focus:outline-secondarycol hover:bg-slate-100" />
                    </div>
                </nav>
                <nav>
                    <ul className="hidden md:flex relative md:top-2 top-3 items-center font-semibold text-base m-0">
                        <li className="p-3 hover:bg-slate-100 rounded-full transition-all cursor-pointer" onClick={() => setShowLogin(true)}>Login</li>
                        <li>|</li>
                        <li className="p-3 hover:bg-secondarylight hover:text-white rounded-full transition-all cursor-pointer" onClick={() => setShowSignup(true)}>Signup</li>
                    </ul>
                </nav>
                <i className="bx bx-menu md:hidden relative top-2 flex items-center block text-5xl cursor-pointer m-0" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                {isMenuOpen && (
                <div className={`absolute rounded-lg xl:hidden top-20 left-0 w-full bg-white flex flex-col items-center gap-1 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white transition-all cursor-pointer">Home</li>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white transition-all cursor-pointer">Teachers</li>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white transition-all cursor-pointer">Contact</li>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white transition-all cursor-pointer">Resources</li>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white transition-all cursor-pointer" onClick={handleLogin}>Login</li>
                    <li className="list-none w-full text-center p-4 hover:bg-secondarycol hover:text-white hover:rounded-b-lg transition-all cursor-pointer" onClick={handleSignup}>Signup</li>
                </div>
                )}
            </header >
            <LoginForm isVisible={showLogin} onClose={() => setShowLogin(false)} />
            <SignupForm isVisible={showSignup} onClose={() => setShowSignup(false)} />
        </div >
        </Fragment>
    );
}

export default Nav;