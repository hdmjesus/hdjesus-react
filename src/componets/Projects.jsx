import React, { useState, useEffect } from 'react';

const Projects = ({ children }) => {
	return (
		<section class='proyectos' id='proyectos'>
			<h2 class='title-level2'>Proyectos recientes</h2>
			<div class='proyectos__container' id='proyectosHome'>
				{children}
			</div>
		</section>
	);
};

export default Projects;
