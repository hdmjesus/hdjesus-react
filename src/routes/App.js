import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('@/views/Home'));
const Portafolio = React.lazy(() => import('@/views/Portafolio'));

import Contexto from '@/context/StaticContext';

const App = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const URL = 'https://my-json-server.typicode.com/hdmjesus/-Projects/db';
		fetch(URL)
			.then((res) => res.json())
			.then(({ hdjesus: { proyectos } }) => setData(proyectos))
			.catch((err) => console.log(err.message));
	}, []);

	const { Provider } = Contexto;

	return (
		<BrowserRouter>
			<Provider value={data}>
				<Suspense fallback={null}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/portafolio' component={Portafolio} />
						{/* <Route component={} /> */}
					</Switch>
				</Suspense>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
