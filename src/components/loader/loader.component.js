import React from 'react';
import {ModalWindow } from '../modal-window/modal-window';
import './loader.css';

export class Loader extends React.Component{
    render(){
        return (
            <ModalWindow id="loader" hidden="true" >
                <div className="flex-center loader-body">
                    <div className="loader"></div>
                    <div>Loading...</div>
                </div>
            </ModalWindow>
        );
    }
}