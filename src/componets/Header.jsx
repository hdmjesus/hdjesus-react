import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/statics/icons/logo.svg';
import facebook from '@/statics/icons/face.webp';
import instagram from '@/statics/icons/ig.webp';
import twitter from '@/statics/icons/twitter.webp';
import linkedin from '@/statics/icons/lik.webp';
import github from '@/statics/icons/gh.webp';

const Header = () => {
	const [container, setContainer] = useState([]);

	function toogleBtnMenu() {
		if (container.classList.contains('dos')) {
			container.classList.remove('dos');
			container.classList.add('uno');
		} else {
			container.classList.remove('uno');
			container.classList.add('dos');
		}
	}

	function darkMode() {
		const btnDarkMode = document.getElementById('switch');
		document.body.classList.toggle('dark');
		btnDarkMode.classList.toggle('active');

		//   Guardamos el modo nocturne en localstores
		if (document.body.classList.contains('dark')) {
			localStorage.setItem('dark-mode', 'true');
		} else {
			localStorage.setItem('dark-mode', 'false');
		}
	}

	useEffect(() => {
		const $enlaces = document.getElementById('enlances');
		const btnDarkMode = document.getElementById('switch');
		setContainer($enlaces);

		if (localStorage.getItem('dark-mode') === 'true') {
			document.body.classList.add('dark');
			btnDarkMode.classList.add('active');
		} else {
			document.body.classList.remove('dark');
			btnDarkMode.classList.remove('active');
		}
	}, []);
	return (
		<header className='header' id='header'>
			<figure className='header__logo'>
				<Link to={'/'}>
					<img src={logo} alt='Logo personal' />
				</Link>
			</figure>

			<div className='header__components'>
				<nav className='header--nav-mobile' arial-label='menu'>
					<p id='nav-mobile' onClick={toogleBtnMenu}>
						<i className='fas fa-bars'></i>
					</p>

					<nav className='enlances uno' id='enlances'>
						<ul className='list-nav' id='list-nav-mobile'>
							<li>
								<Link to={`/`}>
									{' '}
									<i className='fa fa-home'></i> | Inicio
								</Link>
							</li>
							<li>
								<Link to={`/portafolio`}>
									{' '}
									<i className='fa fa-briefcase' id='portafolio'></i> |
									Portfolio
								</Link>
							</li>
						</ul>
						<div className='redes'>
							<div className='redes-enlace'>
								<div className='container'>
									<ul className='social-list'>
										<li>
											<a
												href='https://www.facebook.com/hernandez41'
												rel='noopener'
												rel='noreferrer'
												target='__blank'>
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
												target='__blank'>
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
												target='__blank'>
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
												target='__blank'>
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
												target='__blank'>
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
						</div>
					</nav>
				</nav>

				<nav className='header--nav-desktop'>
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

				<button
					className='switch'
					id='switch'
					aria-label='Dark mode button'
					tabindex='0'
					onClick={darkMode}>
					<span>
						<i className='fas fa-sun'></i>
					</span>
					<span>
						<i className='fas fa-moon'></i>
					</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
