import React from 'react';

const ProjectItem = (props) => {
	console.log(props);
	return (
		<article className='proyecto'>
			<div className='proyecto__description'>
				<h3 className='proyecto__title'>{props.title}</h3>
				<p>{props.description}</p>

				<div className='proyecto__buttons'>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href={props.online}
						className='button-primary'>
						Ver Online
					</a>
					<a
						rel='noopener'
						rel='noreferrer'
						target='_blank'
						href={props.github}
						className='button-second'>
						{' '}
						Ver codigo
					</a>
				</div>
			</div>

			<figure className='proyecto__image'>
				<img src={props.img} width='300' height='230' alt={props.title} />
			</figure>
		</article>
	);
};

export default ProjectItem;
