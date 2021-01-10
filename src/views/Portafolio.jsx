import React, { useState, useEffect, useContext } from 'react';
import Banner from '@/componets/Portafolio/Banner';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import Contexto from '@/context/StaticContext';

const Portafolio = (props) => {
	const [url, setUrl] = useState();
	const API = useContext(Contexto);
	console.log(API);

	useEffect(() => {
		setUrl(props.match.path);
	}, []);

	return (
		<>
			<Header />
			<Banner />
			<Projects value={url}>
				<ProjectItem />
			</Projects>
			<Footer />
		</>
	);
};

export default Portafolio;
