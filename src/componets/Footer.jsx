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
		<footer className='footer'>
			<hr />
			<div className='footer__container'>
				<div className='footer_redes'>
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
										loading='lazy'
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
										loading='lazy'
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
										loading='lazy'
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
										loading='lazy'
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
										loading='lazy'
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer__derechos'>
					<p>&copy; Jesus Hernandez All rights reserved {year}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
