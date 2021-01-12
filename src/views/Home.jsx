import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import LazyProjects from '@/componets/LazyProjects';
import ProjectItem from '@/componets/ProjectItem';
import Services from '@/componets/Home/Services';
import Skills from '@/componets/Home/LazySkills';
import useGlobalData from '@/Hooks/useGlobalData';
import ButtonUp from '@/componets/ButtonUp';
import Whatasapp from '@/componets/Whatapps';

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
			<Skills />
			<LazyProjects>
				{data &&
					data
						.map((item) => <ProjectItem key={item.id} {...item} />)
						.slice(0, 2)}
				{}
			</LazyProjects>
			<ButtonUp />
			<Whatasapp />
			<Footer />
		</>
	);
};

export default Home;
