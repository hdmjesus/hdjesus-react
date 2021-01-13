import React, { useState, useEffect } from 'react';
import fotoHdjesus from '@/statics/images/yox1.webp';
import fotoHdjesusX2 from '@/statics/images/yox2.webp';
import Banner from '@/statics/images/work-home.svg';
import CV from '@/statics/docs/CVjesus.webp';

const Hero = () => {
	function handleHeader(entries) {
		const hd = document.getElementById('header');

		if (entries[0].intersectionRatio == 0) {
			hd.classList.contains('up');
			hd.classList.add('up');
		} else {
			hd.classList.contains('up');
			hd.classList.remove('up');
		}
	}
	let options = {
		root: null,
		threshold: 0.5,
	};

	useEffect(() => {
		const barrita = document.getElementById('barra');
		const observer = new IntersectionObserver(handleHeader, options);
		observer.observe(barrita);
	}, []);
	return (
		<section className='hero' id='hero'>
			<hr className='line--header' id='barra' />
			<div className='hero__container'>
				<article className='hero__skills'>
					<div className='hero__curriculum' aria-label='Curriculum'>
						<a href={CV} download>
							<p>Hoja de vida</p>
						</a>
					</div>

					<figure className='hero__work' role='banner'>
						<img src={Banner} alt='Espacio de trabajo' />
					</figure>
				</article>

				<article className='jesusH'>
					<picture className='jesusH__image'>
						<source media='(min-width:768px )' srcset={fotoHdjesusX2} />
						<img src={fotoHdjesus} alt='Jesus Hernandez' />
					</picture>

					<div className='jesusH__description' tabindex='0'>
						<h1>Jesús Hernández</h1>
						<h2>Frontend Developer</h2>
						<h2>Tecnico Ambiental</h2>{' '}
						<p>
							Soy Frontend Developer y deseo dar soluciones ambientales ♻️ con
							ayuda de la tecnología💻.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Hero;
