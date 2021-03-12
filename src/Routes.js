import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

const Routes = () => {
	return (
		<Suspense fallback={<h1>Loading....</h1>}>
			<Router>
				<Switch>
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</Router>
		</Suspense>
	);
};

export default Routes;