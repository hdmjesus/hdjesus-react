import React, { Suspense } from 'react';
import useNearScreen from '@/Hooks/useObserver';
const Skills = React.lazy(() => import('@/componets/Home/Skills'));

export default function lazyTechnologies() {
	const { isNearScreen, fromRef } = useNearScreen('100px');

	return (
		<div ref={fromRef}>
			<Suspense fallback={null}> {isNearScreen ? <Skills /> : null}</Suspense>
		</div>
	);
}
