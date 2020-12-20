import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { alertActions } from './_actions';
import { history } from './_helpers';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import CategoryProducts from './containers/Category/CategoryProducts';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

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

  const showToast = (type, msg) => {
    toast[type](msg, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="App">
      <div className="alertBox">
        { alert.message && alert.type === 'alert-success' ? showToast('success', alert.message) : '' }
        { alert.message && alert.type === 'alert-danger' ? showToast('error', alert.message) : '' }
      </div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/category/:categoryname" component={CategoryProducts} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
