import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from './_actions';
import { history } from './_helpers';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import CategoryProducts from './containers/Category/CategoryProducts';
import './App.css';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    // location, action as param
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="alertBox">
          { alert.message &&
            <div style={{ color: 'red' }} className={`alert ${alert.type}`}>{alert.message}</div> }
        </div>
        <Layout>
          <Switch>
            <Route path="/category/:categoryname" component={CategoryProducts} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
