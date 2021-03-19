import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import Create from './Containers/Create';
import CreateForm from './Containers/CreateForm';

const Responses = lazy(() => import('./Containers/Responses'));

const Routes = () => {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/create" component={Create} />
				<Route exact path="/create/templates" component={Create} />
				<Route exact path="/create/form" component={CreateForm} />
				<Route exact path="/responses" component={Responses} />
			</Switch>
		</Suspense>
	);
};

export default Routes;
