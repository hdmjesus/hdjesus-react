import React, { useState, useEffect } from 'react';
import bannerPortafolio from '@/statics/images/portafolio.webp';
import bannerPortafolioMobile from '@/statics/images/portafolio600px.webp';
const Banner = () => {
	function handleHeader(entries) {
		const hd = document.getElementById('header');

		if (entries[0].intersectionRatio >= 0.75) {
			hd.classList.remove('up');
		} else {
			hd.classList.add('up');
		}
	}
	let options = {
		root: null,
		threshold: 0.75,
	};

	useEffect(() => {
		const img = document.getElementById('images');
		const observer = new IntersectionObserver(handleHeader, options);
		observer.observe(img);
	}, []);

	return (
		<section class='banner'>
			<figure class='banner__image' id='images'>
				<picture>
					<source media='(min-width:620px )' srcset={bannerPortafolio} />
					<img src={bannerPortafolioMobile} alt='Jesus Hernandez' />
				</picture>
			</figure>
		</section>
	);
};
export default Banner;
