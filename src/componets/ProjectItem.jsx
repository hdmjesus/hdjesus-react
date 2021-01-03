import React, { useState, useEffect } from 'react';

const ProjectItem = () => {
	return (
		<article class='proyecto'>
			<div class='proyecto__description'>
				<h3 class='proyecto__title'>title</h3>
				<p>description</p>

				<div class='proyecto__buttons'>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href=''
						class='button-primary'>
						Ver Online
					</a>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href=''
						class='button-second'>
						{' '}
						Ver codigo
					</a>
				</div>
			</div>

			<figure class='proyecto__image'>
				<img src='' width='300' height='230' alt='' />
			</figure>
		</article>
	);
};

export default ProjectItem;
