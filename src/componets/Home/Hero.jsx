import React, { useState, useEffect } from 'react';
import fotoHdjesus from '@/statics/images/yox1.webp';
import fotoHdjesusX2 from '@/statics/images/yox2.webp';
import Banner from '@/statics/images/work-home.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<hr className='line--header' />
			<div className='hero__container'>
				<article className='hero__skills'>
					<div className='hero__curriculum' aria-label='Curriculum'>
						<a href='' download='cv: Jesus Hernandez'>
							<p>Hoja de vida</p>
						</a>
					</div>

					<figure className='hero__work' role='banner'>
						<img src={Banner} alt='Espacio de trabajo' loading='lazy' />
					</figure>
				</article>

				<article className='jesusH'>
					<picture className='jesusH__image'>
						<source media='(min-width:768px )' srcset={fotoHdjesusX2} />
						<img src={fotoHdjesus} alt='Jesus Hernandez' loading='lazy' />
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
