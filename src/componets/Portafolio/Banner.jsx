import React, { useState, useEffect } from 'react';
import bannerPortafolio from '@/statics/images/portafolio.webp';
import fotoHdjesus from '@/statics/images/yox1.png';
import fotoHdjesusX2 from '@/statics/images/yox2.png';
const Banner = ({ children }) => {
	return (
		<section class='banner'>
			<figure class='banner__image'>
				<picture>
					<source media='(min-width:1000px )' srcset={fotoHdjesusX2} />
					<img src={fotoHdjesus} alt='Jesus Hernandez' />
				</picture>
			</figure>
		</section>
	);
};
export default Banner;
