import { push } from 'react-router-redux'

export const appRoutes = ({dispatch}) => next => action => {
    switch(action.type){
        case 'DISPLAY_CART' :
            dispatch(push('/cart'));
            break;
        case 'DISPLAY_HOME' :
            dispatch(push('/'));
            break;
        case 'DISPLAY_SIGNATURE_MODAL' :
            dispatch(push('/cart/signature',{isModalOpen:true}));
            break;
        case 'DISPLAY_PAYMENT_MODAL' :
            dispatch(push('/cart/payment',{isModalOpen:true}));
            break;
        default:
            break;
    }
    return next(action);

} 