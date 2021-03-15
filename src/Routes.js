import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Create from "./Containers/Create";

const Routes = () => {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>

				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route exact  path="/create" component={Create} />
				</Switch>
		</Suspense>
	);
};

export default Routes;