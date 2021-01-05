import React, { useState, useEffect } from 'react';
import bannerPortafolio from '@/statics/images/portafolio.webp';
import bannerPortafolioMobile from '@/statics/images/portafolio600px.webp';
const Banner = () => {
	return (
		<section class='banner'>
			<figure class='banner__image'>
				<picture>
					<source media='(min-width:620px )' srcset={bannerPortafolio} />
					<img src={bannerPortafolioMobile} alt='Jesus Hernandez' />
				</picture>
			</figure>
		</section>
	);
};
export default Banner;
