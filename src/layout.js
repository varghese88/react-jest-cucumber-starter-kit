import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { store, history } from './store';

import Header from "./components/header/header.component";
import Home from "./routes/home/home.container";
import Cart from "./routes/cart/cart.container";
import PaymentModal from './routes/cart/modals/payment-modal.container';
import SigatureModal from './routes/cart/modals/signature-modal.container';


const Layout = () => (
  <Provider store={store}>
    <div className="flex-column-center full-height" >
      <Header className="flex-row flex-basis-10 full-width bg-red"/>
      <div className="flex-column-center flex-basis-90 bg-blue">
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/cart/payment" component={PaymentModal} />
            <Route path="/cart/signature" component={SigatureModal} />
          </div>
        </ConnectedRouter>
      </div>
    </div>
  </Provider>
);

export default Layout;
