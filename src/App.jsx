import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" render={() => <h1>Home Page</h1>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
