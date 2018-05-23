import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store, history } from './store';

import Login from './routes/login/login.component';
import Header from "./components/header/header.component";
import Home from "./routes/lookup/lookup.container";
import Cart from "./routes/cart/cart.container";
import PaymentModal from './routes/cart/modals/payment-modal.container';
import SigatureModal from './routes/cart/modals/signature-modal.container';
import {Loader } from './components/loader/loader.component';

const Layout = () => (
  <Provider store={store}>
    <div className="flex-column-center full-height" >
      <Loader />
      <Header className="flex-row flex-basis-10 full-width bg-header-color shadow-light-grey"/>
      <div className="flex-column-center flex-basis-90 full-width">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/lookup" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/cart/payment" component={PaymentModal} />
            <Route path="/cart/signature" component={SigatureModal} />
          </Switch>
        </ConnectedRouter>
      </div>
    </div>
  </Provider>
);

export default Layout;
