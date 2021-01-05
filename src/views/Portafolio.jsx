import React, { useState, useEffect } from 'react';
import Banner from '@/componets/Portafolio/Banner';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';

const Portafolio = (props) => {
	const [url, setUrl] = useState();

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
