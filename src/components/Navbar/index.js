import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="flex flex-col md:flex-row  px-10 md:px-24 py-4 justify-between bg-indigo-50	">
			<div className='flex justify-between '>
				<Link to="/">
					<img className="h-10 w-10" src={Logo} alt="Logo" />
				</Link>
				<button
					className="focus:outline-none"
					onClick={() => {
						setNavbarOpen(!navbarOpen);
					}}
				>
					<svg
						className="h-10 w-10 md:hidden"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<ul className={`${!navbarOpen ? 'hidden md:flex' : ''} flex md:flex-row flex-col mt-8 space-y-6 md:mt-0 md:space-y-0  md:mx-0`}>
				<li className="md:mx-8 md:px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800  ">
					<NavLink to="/skills">Skills</NavLink>
				</li>
				<li className="md:mx-8 md:px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800  ">
					<NavLink to="/portfolio">Portfolio</NavLink>
				</li>
				<li className="md:mx-8 md:px-4 pb-1 text-indigo-800 w-32 text-center self-center border-b border-transparent hover:border-indigo-800 ">
					<NavLink to="/contacto">Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
