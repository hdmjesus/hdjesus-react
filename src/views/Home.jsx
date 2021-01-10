import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Services from '@/componets/Home/Services';
import Technologies from '@/componets/Home/Technologies';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = () => {
	const [data, setData] = useState([]);

	async function getDataHome() {
		const URL = 'https://my-json-server.typicode.com/hdmjesus/-Projects/db';
		const response = await fetch(URL);
		const {
			hdjesus: { proyectos },
		} = await response.json();

		setData(proyectos);
	}

	useEffect(() => {
		getDataHome();
	}, []);
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Technologies />
			<Projects>
				{data
					.map((item) => <ProjectItem key={item.id} {...item} />)
					.slice(0, 2)}
				{}
			</Projects>
			<Footer />
		</>
	);
};

export default Home;
