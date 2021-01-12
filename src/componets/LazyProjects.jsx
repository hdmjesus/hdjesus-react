import React, { Suspense } from 'react';
import useNearScreen from '@/Hooks/useObserver';
const Projects = React.lazy(() => import('@/componets/Projects'));
export default function lazyProjects() {
	const { isNearScreen, fromRef } = useNearScreen('50px');

	return (
		<div ref={fromRef}>
			<Suspense fallback={null}> {isNearScreen ? <Projects /> : null}</Suspense>
		</div>
	);
}
