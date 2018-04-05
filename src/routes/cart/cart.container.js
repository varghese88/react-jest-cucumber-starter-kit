import { connect } from 'react-redux';
import Cart from './cart.component'
import { displayPayment } from './cart.actions';

export default connect(() =>({}),{displayPayment})(Cart);