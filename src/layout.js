import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";
import Cart from "./routes/cart/cart.component";
import { PaymentModal} from './routes/cart/modals/payment-modal.component';
import { SigModal} from './routes/cart/modals/sig-modal.component';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Layout = () => (
  <div className="flex-column-center full-height" >
    <Header className="flex-row flex-basis-10 full-width bg-red"/>
    <div className="flex-column-center flex-basis-90 bg-blue">
      <Router>
        <div>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Route path="/cart/payment" component={PaymentModal} />
          <Route path="/cart/sig" component={SigModal} />
        </div>
      </Router>
    </div>
  </div>
);

export default Layout;
