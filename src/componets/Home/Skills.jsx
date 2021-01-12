import React, { useState } from 'react';

const Technologies = () => {
	const [javascriptPercent, setJavascriptPercent] = useState(40);
	const [webpackPercent, setWebpacksPercent] = useState(40);
	const [cssPercent, setCSSPercent] = useState(50);
	const [sassPercent, setSassPercent] = useState(40);
	const [tailwindPercent, setTailwindPercent] = useState(50);
	const [bootstrapPercent, setBootstrapPercent] = useState(30);
	const [reactPercent, setReactPercent] = useState(40);
	const [reduxPercent, setReduxPercent] = useState(30);

	return (
		<section className='tecnologies'>
			<div className='tecnologies__container'>
				<h2 className='title-level2'>Skills</h2>
				<div className='skills' id='skills'>
					<div className='skill  '>
						<div className='skillbar' data-lenguaje='Javascript'>
							<div className='skillbar__title javascript'>
								<span>JavaScript</span>
							</div>
							<div
								className={`skillbar__bar javascriptLight
								${javascriptPercent == 30 ? '' : ''}
								${javascriptPercent >= 40 ? 'width-40' : ''}
								${javascriptPercent >= 50 ? 'width-50' : ''}
								${javascriptPercent >= 60 ? 'width-60' : ''}
								${javascriptPercent >= 70 ? 'width-70' : ''}
								${javascriptPercent >= 80 ? 'width-80' : ''}
								${javascriptPercent >= 90 ? 'width-90' : ''}
								${javascriptPercent >= 100 ? 'width-100' : ''} `}></div>

							<div className={`skillbar__percent  `}>{javascriptPercent} %</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${webpacks_Percent}%'
							data-lenguaje='Webpacks'>
							<div className={`skillbar__title 	webpacks `}>
								<span>Webpacks</span>
							</div>

							<div
								className={`skillbar__bar  	webpacksLight 	${
									webpackPercent == 30 ? '' : ''
								}
								${webpackPercent >= 40 ? 'width-40' : ''}
								${webpackPercent >= 50 ? 'width-50' : ''}
								${webpackPercent >= 60 ? 'width-60' : ''}
								${webpackPercent >= 70 ? 'width-70' : ''}
								${webpackPercent >= 80 ? 'width-80' : ''}
								${webpackPercent >= 90 ? 'width-90' : ''}
								${webpackPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{webpackPercent} %</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${css_Percent}%'
							data-lenguaje='CSS'>
							<div className='skillbar__title css'>
								<span>CSS</span>
							</div>

							<div
								className={`skillbar__bar medium cssLight ${
									webpackPercent == 30 ? '' : ''
								}
								${cssPercent >= 40 ? 'width-40' : ''}
								${cssPercent >= 50 ? 'width-50' : ''}
								${cssPercent >= 60 ? 'width-60' : ''}
								${cssPercent >= 70 ? 'width-70' : ''}
								${cssPercent >= 80 ? 'width-80' : ''}
								${cssPercent >= 90 ? 'width-90' : ''}
								${cssPercent >= 100 ? 'width-100' : ''} `}></div>
							<div className='skillbar__percent'>{cssPercent} %</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${sass_Percent}%'
							data-lenguaje='SASS'>
							<div className='skillbar__title sass'>
								<span>SASS</span>
							</div>

							<div
								className={`skillbar__bar sassLight ${
									webpackPercent == 30 ? '' : ''
								}
								${sassPercent >= 40 ? 'width-40' : ''}
								${sassPercent >= 50 ? 'width-50' : ''}
								${sassPercent >= 60 ? 'width-60' : ''}
								${sassPercent >= 70 ? 'width-70' : ''}
								${sassPercent >= 80 ? 'width-80' : ''}
								${sassPercent >= 90 ? 'width-90' : ''}
								${sassPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{sassPercent}%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${tailwind_Percent}%'
							data-lenguaje='Tailwind'>
							<div className='skillbar__title tailwind'>
								<span>Tailwind</span>
							</div>

							<div
								className={`skillbar__bar tailwindLight ${
									webpackPercent == 30 ? '' : ''
								}
								${tailwindPercent >= 40 ? 'width-40' : ''}
								${tailwindPercent >= 50 ? 'width-50' : ''}
								${tailwindPercent >= 60 ? 'width-60' : ''}
								${tailwindPercent >= 70 ? 'width-70' : ''}
								${tailwindPercent >= 80 ? 'width-80' : ''}
								${tailwindPercent >= 90 ? 'width-90' : ''}
								${tailwindPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{tailwindPercent}%</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${bootstrap_Percent}%'
							data-lenguaje='Bootstrap'>
							<div className='skillbar__title bootstrap'>
								<span>Bootstrap</span>
							</div>

							<div
								className={`skillbar__bar bootstrapLight ${
									webpackPercent == 30 ? '' : ''
								}
								${bootstrapPercent >= 40 ? 'width-40' : ''}
								${bootstrapPercent >= 50 ? 'width-50' : ''}
								${bootstrapPercent >= 60 ? 'width-60' : ''}
								${bootstrapPercent >= 70 ? 'width-70' : ''}
								${bootstrapPercent >= 80 ? 'width-80' : ''}
								${bootstrapPercent >= 90 ? 'width-90' : ''}
								${bootstrapPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{bootstrapPercent} %</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${react_Percent}%'
							data-lenguaje='React'>
							<div className='skillbar__title react'>
								<span>React</span>
							</div>

							<div
								className={`skillbar__bar reactLight ${
									webpackPercent == 30 ? '' : ''
								}
								${reactPercent >= 40 ? 'width-40' : ''}
								${reactPercent >= 50 ? 'width-50' : ''}
								${reactPercent >= 60 ? 'width-60' : ''}
								${reactPercent >= 70 ? 'width-70' : ''}
								${reactPercent >= 80 ? 'width-80' : ''}
								${reactPercent >= 90 ? 'width-90' : ''}
								${reactPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{reactPercent} %</div>
						</div>
					</div>
					<div className='skill'>
						<div
							className='skillbar'
							data-percent='${redux_Percent}%'
							data-lenguaje='Redux'>
							<div className='skillbar__title redux'>
								<span>Redux</span>
							</div>

							<div
								className={`skillbar__bar reduxLight ${
									webpackPercent == 30 ? '' : ''
								}
								${reduxPercent >= 40 ? 'width-40' : ''}
								${reduxPercent >= 50 ? 'width-50' : ''}
								${reduxPercent >= 60 ? 'width-60' : ''}
								${reduxPercent >= 70 ? 'width-70' : ''}
								${reduxPercent >= 80 ? 'width-80' : ''}
								${reduxPercent >= 90 ? 'width-90' : ''}
								${reduxPercent >= 100 ? 'width-100' : ''}`}></div>
							<div className='skillbar__percent'>{reduxPercent} %</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
