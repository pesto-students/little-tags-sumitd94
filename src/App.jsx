import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import alertActions from './store/Alerts/Actions';
import History from './store/Helpers/History';
import Layout from './containers/Layout/Layout';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';

import AppRouter from './appRouter/AppRouter';

toast.configure();

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    // location, action as param
    History.listen(() => {
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
        { alert.message && alert.type === 'alert-info' ? showToast('info', alert.message) : '' }
      </div>
      <Router>
        <ScrollToTop />
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
