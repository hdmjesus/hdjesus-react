import React, { useState, useEffect } from 'react';

const Technologies = () => {
	return (
		<section classname='tecnologies'>
			<div classname='tecnologies__container'>
				<h2 classname='title-level2'>Skills</h2>
				<div classname='skills' id='skills'>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${javascript_Percent}%'
							data-lenguaje='Javascript'>
							<div classname='skillbar__title'>
								<span>JavaScript</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${webpacks_Percent}%'
							data-lenguaje='Webpacks'>
							<div classname='skillbar__title'>
								<span>Webpacks</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${css_Percent}%'
							data-lenguaje='CSS'>
							<div classname='skillbar__title'>
								<span>CSS</span>
							</div>

							<div classname='skillbar__bar medium'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${sass_Percent}%'
							data-lenguaje='SASS'>
							<div classname='skillbar__title'>
								<span>SASS</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${tailwind_Percent}%'
							data-lenguaje='Tailwind'>
							<div classname='skillbar__title'>
								<span>Tailwind CSS</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${bootstrap_Percent}%'
							data-lenguaje='Bootstrap'>
							<div classname='skillbar__title'>
								<span>Bootstrap</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${react_Percent}%'
							data-lenguaje='React'>
							<div classname='skillbar__title'>
								<span>React</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
					<div classname='skill'>
						<div
							classname='skillbar'
							data-percent='${redux_Percent}%'
							data-lenguaje='Redux'>
							<div classname='skillbar__title'>
								<span>Redux</span>
							</div>

							<div classname='skillbar__bar'></div>
							<div classname='skillbar__percent'>90%</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
