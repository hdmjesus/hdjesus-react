import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import facebook from '@/statics/icons/face.webp';
import instagram from '@/statics/icons/ig.webp';
import twitter from '@/statics/icons/twitter.webp';
import linkedin from '@/statics/icons/lik.webp';
import github from '@/statics/icons/gh.webp';

const Footer = () => {
	const [year, setYear] = useState(Number);
	const date = new Date();

	useEffect(() => {
		setYear(date.getFullYear());
	}, []);

	return (
		<footer>
			<div className='footer_redes'>
				<div className='container'>
					<ul className='social-list'>
						<li>
							<a
								href='https://www.facebook.com/hernandez41'
								rel='noopener'
								rel='noreferrer'
								target>
								{' '}
								<img
									src={facebook}
									width='35px'
									height='37px'
									alt='facebook Jesus'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.instagram.com/hdmjesus'
								rel='noopener'
								rel='noreferrer'
								target>
								{' '}
								<img
									src={instagram}
									width='35px'
									height='37px'
									alt='Instagram Jesus'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/hdmjesus/'
								rel='noopener'
								rel='noreferrer'
								target>
								{' '}
								<img
									src={linkedin}
									width='35px'
									height='37px'
									alt='linkedin Jesus'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://twitter.com/HDMjesus'
								rel='noopener'
								rel='noreferrer'
								target>
								{' '}
								<img
									src={twitter}
									width='35px'
									height='37px'
									alt='twitter Jesus'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://github.com/hdmjesus'
								rel='noopener'
								rel='noreferrer'
								target>
								{' '}
								<img
									src={github}
									width='35px'
									height='37px'
									alt='github Jesus'
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='footer__nav'>
				<div className='container'>
					<div className='footer__flex'>
						<nav>
							<ul>
								<li aria-label='Inicio'>
									<Link to={'/'} tabindex='0'>
										{' '}
										Inicio
									</Link>
								</li>
								<li aria-label='Proyectos'>
									<Link to={'/portafolio'}> Portafolio</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<div className='footer__derechos'>
				<div className='container'>
					<p>&copy; Jesus Hernandez All rights reserved {year}</p>

					<p>React Js</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
