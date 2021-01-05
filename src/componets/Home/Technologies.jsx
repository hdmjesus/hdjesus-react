import React, { useState, useEffect } from 'react';

const Technologies = () => {
	return (
		<section className='tecnologies'>
			<div className='tecnologies__container'>
				<h2 className='title-level2'>Skills</h2>
				<div className='skills' id='skills'>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${javascript_Percent}%'
							data-lenguaje='Javascript'>
							<div className='skillbar__title'>
								<span>JavaScript</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${webpacks_Percent}%'
							data-lenguaje='Webpacks'>
							<div className='skillbar__title'>
								<span>Webpacks</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${css_Percent}%'
							data-lenguaje='CSS'>
							<div className='skillbar__title'>
								<span>CSS</span>
							</div>

							<div className='skillbar__bar medium'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${sass_Percent}%'
							data-lenguaje='SASS'>
							<div className='skillbar__title'>
								<span>SASS</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${tailwind_Percent}%'
							data-lenguaje='Tailwind'>
							<div className='skillbar__title'>
								<span>Tailwind</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${bootstrap_Percent}%'
							data-lenguaje='Bootstrap'>
							<div className='skillbar__title'>
								<span>Bootstrap</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${react_Percent}%'
							data-lenguaje='React'>
							<div className='skillbar__title'>
								<span>React</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${redux_Percent}%'
							data-lenguaje='Redux'>
							<div className='skillbar__title'>
								<span>Redux</span>
							</div>

							<div className='skillbar__bar'></div>
							<div className='skillbar__percent'>90%</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
