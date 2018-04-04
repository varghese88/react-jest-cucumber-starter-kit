import React from 'react';
import {ModalWindow } from '../../../components/modal-window/modal-window';

export class SigModal extends React.Component {
    render(){
        const { history, location } = this.props;
        const isModalHidden = location.state && !location.state.isModalOpen;
        return (
            <ModalWindow id="modal2" hidden={isModalHidden}>
                <button onClick={ ()=> history.push('/')}> payment </button>
            </ModalWindow>
        );
    }
}