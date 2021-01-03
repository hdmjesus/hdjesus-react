import React, { useState, useEffect } from 'react';
import fotoHdjesus from '@/statics/images/yox1.png';
import fotoHdjesusX2 from '@/statics/images/yox2.png';
import Banner from '@/statics/images/work-home.svg';

const Hero = () => {
	return (
		<section classname='hero' id=''>
			<hr classname='line--header' />
			<div classname='hero__container'>
				<article classname='hero__skills'>
					<div classname='hero__curriculum' aria-label='Curriculum'>
						<a href='' download='cv: Jesus Hernandez'>
							<p>Hoja de vida</p>
						</a>
					</div>

					<figure classname='hero__work' role='banner'>
						<img src={Banner} alt='Espacio de trabajo' />
					</figure>
				</article>

				<article classname='jesusH'>
					<figure classname='jesusH__image'>
						<picture>
							<source media='(min-width:768px )' srcset={fotoHdjesusX2} />
							<img src={fotoHdjesus} alt='Jesus Hernandez' />
						</picture>
					</figure>

					<div classname='jesusH__description' tabindex='0'>
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
