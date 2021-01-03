import React, { useState, useEffect } from 'react';

import facebook from '@/statics/icons/face.webp';
import instagram from '@/statics/icons/ig.webp';
import twitter from '@/statics/icons/twitter.webp';
import linkedin from '@/statics/icons/lik.webp';
import github from '@/statics/icons/gh.webp';

const Footer = () => {
	return (
		<section>
			<div class='footer_redes'>
				<div class='container'>
					<ul class='social-list'>
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

			<div class='footer__nav'>
				<div class='container'>
					<div class='footer__flex'>
						<nav>
							<ul>
								<li>
									<a id='home-router-footer'>Inicio</a>
								</li>
								<li>
									<a id='portafolio-router-footer'>Portafolio</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<div class='footer__derechos'>
				<div class='container'>
					<p>&copy Jesus Hernandez All rights reserved 2021.</p>
					<p>React Js</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
