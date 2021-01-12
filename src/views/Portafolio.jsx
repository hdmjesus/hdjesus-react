import React, { useState, useEffect } from 'react';
import Banner from '@/componets/Portafolio/Banner';
import Projects from '@/componets/Projects';
import ProjectItem from '@/componets/ProjectItem';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import useGlobalData from '@/Hooks/useGlobalData';

const Portafolio = (props) => {
	const [url, setUrl] = useState();
	const [data, setData] = useState([]);
	const API = useGlobalData();
	useEffect(() => {
		setUrl(props.match.path);
		setData(API);
	}, [API]);

	return (
		<>
			<Header />
			<Banner />
			<Projects value={url}>
				{data
					? data.map((item) => <ProjectItem key={item.id} {...item} />)
					: ''}
			</Projects>
			<Footer />
		</>
	);
};

export default Portafolio;
