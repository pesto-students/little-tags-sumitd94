import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { alertActions } from './_actions';
import { history } from './_helpers';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import CategoryProducts from './containers/Category/CategoryProducts';
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Cart from './containers/Cart/Cart';
import Address from './components/Checkout/Address/Address';
import Payment from './components/Checkout/Payment/Payment';
import ThankYou from './components/Checkout/ThankYou/ThankYou';
import NewAddress from './components/Checkout/Address/NewAddress/NewAddress';
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
            <Route path="/product/:categoryname/:productId" exact component={ProductDetails} />
            <Route path="/products/:categoryname" exact component={CategoryProducts} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/new-address" exact component={NewAddress} />
            <Route path="/checkout/payment" exact component={Payment} />
            <Route path="/checkout" exact component={Address} />
            <Route path="/thank-you" exact component={ThankYou} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
