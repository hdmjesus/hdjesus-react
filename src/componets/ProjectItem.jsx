import React, { useState, useEffect } from 'react';

const ProjectItem = () => {
	return (
		<article className='proyecto'>
			<div className='proyecto__description'>
				<h3 className='proyecto__title'>title</h3>
				<p>description</p>

				<div className='proyecto__buttons'>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href=''
						className='button-primary'>
						Ver Online
					</a>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href=''
						className='button-second'>
						{' '}
						Ver codigo
					</a>
				</div>
			</div>

			<figure className='proyecto__image'>
				<img src='' width='300' height='230' alt='' />
			</figure>
		</article>
	);
};

export default ProjectItem;
