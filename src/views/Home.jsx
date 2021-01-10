import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Services from '@/componets/Home/Services';
import Technologies from '@/componets/Home/Technologies';
import useGlobalData from '@/Hooks/useGlobalData';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = () => {
	const [data, setData] = useState([]);
	const API = useGlobalData();
	useEffect(() => {
		setData(API);
	}, [API]);
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Technologies />
			<Projects>
				{data &&
					data
						.map((item) => <ProjectItem key={item.id} {...item} />)
						.slice(0, 2)}
				{}
			</Projects>
			<Footer />
		</>
	);
};

export default Home;
