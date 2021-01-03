import React, { useState, useEffect } from 'react';
import Banner from '@/componets/Portafolio/Banner';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = () => {
	return (
		<>
			<Header />
			<Banner />
			<Projects>
				<ProjectItem />
			</Projects>
			<Footer />
		</>
	);
};

export default Home;
