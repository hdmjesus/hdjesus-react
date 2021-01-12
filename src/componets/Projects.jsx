import React from 'react';

const Projects = (props) => {
	const urlActual = props.value;

	return (
		<section className='proyectos' id='proyectos'>
			{urlActual === '/portafolio' ? (
				<h2 className='title-level2'>Proyectos</h2>
			) : (
				<h2 className='title-level2'>Ultimos proyectos</h2>
			)}

			<div className='proyectos__container' id='proyectosHome'>
				{props.children}
			</div>
		</section>
	);
};

export default Projects;
