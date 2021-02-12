import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../../images/profile-pic (3).png';
const Hero = () => {
	return (
		<div className=" body w-screen">
			

			<section className="text-gray-600 body-font ">
				<div className="container mx-auto flex px-5  md:py-24 md:flex-row-reverse flex-col items-center ">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center mb-8 md:mb-0">
						<img
							className="object-cover object-center rounded w-2/3 transform hover:rotate-6 transition duration-150 ease-in"
							alt="hero"
							src={Perfil}
						/>
					</div>

					<div className="lg:flex-grow md:w-1/2 lg:px-24 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Hola!, mi nombre es
							<br />
							<span className="text-indigo-500">Kioshi Okamoto</span>
						</h1>
						<p className="mb-8 leading-relaxed text-lg font-light">
							Estudio ingeniería de software en la universidad nacional mayor de San Marcos, en Perú.
							<br />
							Actualmente estoy enfocado en tecnologías de desarrollo web, si necesitas ayuda en algun
							tema afín, no dudes en conversarme!
						</p>
						<div className="flex justify-center">
							<Link
								className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transform active:scale-95 transition duration-150 ease-out rounded text-xl"
								to="/contacto"
							>
								Contáctame!
							</Link>
						</div>
					</div>
				</div>
			</section>
			
		</div>
	);
};

export default Hero;
