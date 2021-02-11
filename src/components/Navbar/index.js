import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png';
const Navbar = () => {
    return (
        <nav className='flex px-24 py-4 justify-between bg-indigo-50	'>
            <Link to='/'><img className="h-10 w-10" src={Logo} alt="Logo"/></Link>
            <ul className='flex'>
                <li className="mx-8 px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800 transition ease-linear duration-200 ">
                    <NavLink className='' to='/acerca-de-mi'>Acerca de mí</NavLink>
                </li>
                <li className="mx-8 px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800  ">
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </li>
                <li className="mx-8 px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800 ">
                    <NavLink to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
