import React, { Suspense, useState, useEffect } from 'react';
import useNearScreen from '@/Hooks/useObserver';
import useGlobalData from '@/Hooks/useGlobalData';
const Projects = React.lazy(() => import('@/componets/Projects'));
import ProjectItem from '@/componets/ProjectItem';

export default function lazyProjects(props) {
	const { isNearScreen, fromRef } = useNearScreen('50px');
	const [data, setData] = useState([]);
	const urlActual = props.url;
	const API = useGlobalData();
	console.log(props);

	useEffect(() => {
		setData(API);
	}, [API]);
	return (
		<div ref={fromRef}>
			<Suspense fallback={null}>
				{/* Si la vista actual es el Home y a su vez estamos cerca al componente nos muestra solo dos proyectos, de los contrario
quiere decir que estamos en la seccion de portafolio y los renderiza todos */}
				{isNearScreen & (urlActual == '/') ? (
					<Projects {...props}>
						{data &&
							data
								.map((item) => <ProjectItem key={item.id} {...item} />)
								.slice(0, 2)}
						{}
					</Projects>
				) : (
					<Projects {...props}>
						{data &&
							data.map((item) => <ProjectItem key={item.id} {...item} />)}
						{}
					</Projects>
				)}
			</Suspense>
		</div>
	);
}
