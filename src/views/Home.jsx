import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Services from '@/componets/Home/Services';
import Technologies from '@/componets/Home/Technologies';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = () => {
	const [javascriptPercent, setJavascriptPercent] = useState(40);

	async function getData() {
		const URL = 'https://my-json-server.typicode.com/hdmjesus/-Projects/db';
		const response = await fetch(URL);
		const data = await response.json();
		console.log(data);
	}
	useEffect(() => {
		getData();
	}, []);
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
