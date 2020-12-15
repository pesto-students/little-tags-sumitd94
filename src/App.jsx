import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
