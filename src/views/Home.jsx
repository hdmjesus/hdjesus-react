import React, { useState, useEffect, useRef, Suspense } from 'react';
import Hero from '@/componets/Home/Hero.jsx';
import LazyProjects from '@/componets/LazyProjects';
import Services from '@/componets/Home/Services';
import Skills from '@/componets/Home/LazySkills';
const ButtonUp = React.lazy(() => import('@/componets/ButtonUp'));
// import ButtonUp from '@/componets/ButtonUp';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
const Home = (props) => {
	const [url, setUrl] = useState(props.match.path);

	return (
		<>
			<Suspense fallback={null}>
				<Header />
				<Hero />
				<Services />
				<Skills />
				<LazyProjects url={url} />
				<ButtonUp />
				<Footer />
			</Suspense>
		</>
	);
};

export default Home;
