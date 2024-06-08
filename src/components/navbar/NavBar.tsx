'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import light_logo from "../../../public/images/Light-theme-logo.png";
import dark_logo from "../../../public/images/Dark-theme-logo.png";



const NavBar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    const handleToggle = (e: any) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme!)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html')?.setAttribute('data-theme', localTheme!)
    }, [theme]);

    return (
        <div className="navbar bg-base-200 rounded-2xl w-2/4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/issues">Issues</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost text-xl flex items-center">
                    <Image src={theme === "light" ? light_logo : dark_logo} alt='logo' width={30} height={30} />
                    ZenTasks
                </Link>

            </div>
            <div className="navbar-end gap-3">
                <label className="btn btn-square btn-ghost swap swap-rotate" aria-label="Change theme color">
                    <input type="checkbox" checked={theme === "dark"} onChange={handleToggle} />
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z">
                        </path>
                    </svg>
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z">
                        </path>
                    </svg>
                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                        <li>
                            <Link href="/" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">Settings</Link>
                        </li>
                        <li>
                            <Link href="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar