import React, { useState, useEffect } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import LazyProjects from '@/componets/LazyProjects';
import Services from '@/componets/Home/Services';
import Skills from '@/componets/Home/LazySkills';
import ButtonUp from '@/componets/ButtonUp';
import Whatasapp from '@/componets/Whatapps';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = (props) => {
	const [url, setUrl] = useState(props.match.path);
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Skills />
			<LazyProjects url={url} />
			<ButtonUp />
			<Whatasapp />
			<Footer />
		</>
	);
};

export default Home;
