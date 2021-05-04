import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import PastOrders from '../components/Orders/PastOrders';
import ThankYou from '../components/Checkout/ThankYou/ThankYou';
import Address from '../components/Checkout/Address/Address';
import Payment from '../components/Checkout/Payment/Payment';
import NewAddress from '../components/Checkout/Address/NewAddress/NewAddress';
import CategoryProducts from '../containers/Category/CategoryProducts';
import ProductDetails from '../containers/ProductDetails/ProductDetails';
import Cart from '../containers/Cart/Cart';

const AppRouter = () => (
  <>
    <Route path="/product/:categoryname/:productId" exact component={ProductDetails} />
    <Route path="/products/:categoryname" exact component={CategoryProducts} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/new-address" exact component={NewAddress} />
    <Route path="/checkout/payment" exact component={Payment} />
    <Route path="/checkout" exact component={Address} />
    <Route path="/thank-you" exact component={ThankYou} />
    <Route path="/past-orders" exact component={PastOrders} />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </>
);

export default AppRouter;
