import React from 'react';
import {ModalWindow } from '../../../components/modal-window/modal-window';

export class PaymentModal extends React.Component{
    render(){
        const { displaySignature, location } = this.props;
        const isModalHidden = location.state && !location.state.isModalOpen;
        return (
            <ModalWindow id="modal1" hidden={isModalHidden}>
                <button onClick={ ()=> displaySignature()}> Sig </button>
            </ModalWindow>
        );
    }
}