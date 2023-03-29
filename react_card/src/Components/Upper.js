import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Upper.css'
export default function Upper() {
    return (
        <div className='main'>
            <div className="container">
                <nav className='navBar '>
                    <input type="search" name="search" id="search" placeholder='Search' />
                    <ul className='flex'>
                        <li><NavLink to='/' className='navBarLink'>Home</NavLink></li><br />
                        <li><NavLink to='/about' className='navBarLink'>About</NavLink></li><br />
                        <li><NavLink to='/contact' className='navBarLink'>Contact</NavLink></li><br />
                        <li><NavLink to='/form' className='navBarLink'>Login</NavLink></li><br />
                    </ul>
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}
