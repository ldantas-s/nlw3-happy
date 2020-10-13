import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';


function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/orphanages" exact component={OrphanageMap} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
