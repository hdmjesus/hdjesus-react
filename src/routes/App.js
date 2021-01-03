import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '@/views/Home';
import Portafolio from '@/views/Portafolio';
const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={Home} />
			<Route path='/portafolio' component={Portafolio} />
			{/* <Route component={} /> */}
		</Switch>
	</BrowserRouter>
);

export default App;
