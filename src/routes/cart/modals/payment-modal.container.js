import { connect } from 'react-redux';
import { PaymentModal } from './payment-modal.component'
import { displaySignature } from './modal.actions';

export default connect(()=>({}),{displaySignature})(PaymentModal);