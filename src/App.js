import React, {  lazy, Suspense} from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes";

const Dashboard = lazy(() => import('./Containers/Dashboard'));


function App() {
  return (
    <Layout>
      <Routes />
    </Layout>

  );
}

export default App;
