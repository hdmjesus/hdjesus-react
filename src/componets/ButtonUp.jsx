import React, { useRef, useEffect } from 'react';

const ButtonUp = () => {
	const buttonUp = useRef();
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrollTop = window.pageYOffset;
			const buttonarrow = buttonUp.current;
			if (scrollTop >= 270) {
				buttonarrow.classList.remove('display-off');
			} else {
				buttonarrow.classList.add('display-off');
			}
		});
	}, []);

	const scrollUp = () => {
		const currrentScroll = document.documentElement.scrollTop;

		if (currrentScroll > 0) {
			window.requestAnimationFrame(scrollUp);
			window.scrollTo(0, currrentScroll - currrentScroll / 10);
		}
	};

	return (
		<div
			ref={buttonUp}
			onClick={scrollUp}
			className='button-up display-off'
			id='button-up'
			arial-label='Button Up'>
			<i className='fas fa-chevron-up'></i>
		</div>
	);
};

export default ButtonUp;
