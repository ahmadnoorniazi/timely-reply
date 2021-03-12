import React, {  lazy, Suspense} from 'react';
import {
  Switch, Route, BrowserRouter as Router, Link,
} from 'react-router-dom';
import './App.css';

const Dashboard = lazy(() => import('./Containers/Dashboard'));


function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
  </Suspense>
  );
}

export default App;
