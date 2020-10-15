import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/orphanages" component={OrphanagesMap} />
				<Route path="/orphanage/:id" component={Orphanage} />
				<Route path="/create-orphanage" component={CreateOrphanage} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
