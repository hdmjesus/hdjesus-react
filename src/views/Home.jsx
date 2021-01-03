import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Services from '@/componets/Home/Services';
import Technologies from '@/componets/Home/Technologies';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Technologies />
			<Projects>
				<ProjectItem />
			</Projects>
			<Footer />
		</>
	);
};

export default Home;
