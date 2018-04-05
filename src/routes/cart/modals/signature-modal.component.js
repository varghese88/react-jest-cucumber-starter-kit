import React from 'react';
import {ModalWindow } from '../../../components/modal-window/modal-window';

export class SigatureModal extends React.Component {
    render(){
        const { displayHome, location } = this.props;
        const isModalHidden = location.state && !location.state.isModalOpen;
        return (
            <ModalWindow id="modal2" hidden={isModalHidden}>
                <button onClick={ ()=> displayHome()}> payment </button>
            </ModalWindow>
        );
    }
}