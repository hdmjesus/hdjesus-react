import React, { useState, useEffect, Suspense } from 'react';
import Banner from '@/componets/Portafolio/Banner';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import useGlobalData from '@/Hooks/useGlobalData';
import LazyProjects from '@/componets/LazyProjects';
import ButtonUp from '@/componets/ButtonUp';
const Portafolio = (props) => {
	const [url, setUrl] = useState(props.match.path);
	const [data, setData] = useState([]);
	const API = useGlobalData();

	useEffect(() => {
		setData(API);
	}, [API]);

	return (
		<>
			<Header />
			<Banner />
			<LazyProjects url={url} />
			<ButtonUp />
			<Footer />
		</>
	);
};

export default Portafolio;
