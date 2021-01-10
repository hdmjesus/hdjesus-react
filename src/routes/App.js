import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@/views/Home';
import Portafolio from '@/views/Portafolio';
import Contexto from '@/context/StaticContext';

const App = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const URL = 'https://my-json-server.typicode.com/hdmjesus/-Projects/db';
		fetch(URL)
			.then((res) => res.json())
			.then(({ hdjesus: { proyectos } }) => setData(proyectos));
	}, []);
	const { Provider } = Contexto;

	return (
		<BrowserRouter>
			<Provider value={data}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/portafolio' component={Portafolio} />
					{/* <Route component={} /> */}
				</Switch>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
