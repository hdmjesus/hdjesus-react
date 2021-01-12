import { useState, useEffect, useRef } from 'react';

function useNearScreen({ distance }) {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef();

	useEffect(function () {
		const onChange = (entries, observer) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				observer.disconnect();
			}
		};
		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance,
		});
		observer.observe(fromRef.current);

		return () => observe.disconnect();
	}, []);
	return { isNearScreen, fromRef };
}
export default useNearScreen;
