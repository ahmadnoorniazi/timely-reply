import React, {  lazy, Suspense} from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes";
import {BrowserRouter as Router} from "react-router-dom";

const Dashboard = lazy(() => import('./Containers/Dashboard'));


function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>

  );
}

export default App;
