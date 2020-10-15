import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';


function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/orphanages" exact component={OrphanagesMap} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
