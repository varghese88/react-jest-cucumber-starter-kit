import { connect } from 'react-redux';
import { SigatureModal } from './signature-modal.component'
import { displayHome } from './modal.actions';

export default connect(()=>({}),{displayHome})(SigatureModal);