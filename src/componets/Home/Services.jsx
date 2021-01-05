import React, { useState, useEffect } from 'react';
import resposibeDesing from '@/statics/images/undraw_progressive_app_m9ms.svg';
import codeSemanting from '@/statics/images/undraw_google_analytics_a57d.svg';
import aplicationScaling from '@/statics/images/undraw_clean_up_ucm0.svg';

const Services = () => {
	return (
		<section className='services' tabindex='0'>
			<h2 className='title-level2'>Podras contar con...</h2>
			<div className='services__container'>
				<article className='service'>
					<figure>
						<div className='figure-service'></div>

						<div className='service__image'>
							<img src={resposibeDesing} alt='Responsibe desing' />
						</div>
					</figure>

					<div className='service__description'>
						<h3>RESPONSIVE DESING</h3>
						<p>
							El Responsive Design o diseño adaptativo, es la técnica que se usa
							en la actualidad para tener una misma web adaptada a las
							diferentes plataformas que nos brinda la tecnología: ordenador,
							tablet y Smartphone.
						</p>
					</div>
				</article>

				<article className='service'>
					<figure>
						<div className='figure-service'></div>

						<div className='service__image'>
							<img src={codeSemanting} alt='Responsibe desing' />
						</div>
					</figure>

					<div className='service__description'>
						<h3>CODIGO SEMANTICO</h3>
						<p>
							Los motores de búsqueda analizan el código para saber qué clase de
							contenido muestran y así, saber cómo mostrarlo.
						</p>
					</div>
				</article>

				<article className='service'>
					<figure>
						<div className='figure-service'></div>

						<div className='service__image'>
							<img src={aplicationScaling} alt='Responsibe desing' />
						</div>
					</figure>

					<div className='service__description'>
						<h3>APLICACIONES ESCALABLES</h3>
						<p>
							Se asegura que su aplicacion pueda crecer sin verse comprometido
							el rendimiento de la misma.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Services;
