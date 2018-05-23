import React from 'react';
import './button.css';

export class CustomButton extends React.Component{
    render(){
        return (
            <div onClick={this.props.onClick} className={`flex-column-center ${this.props.className} bg-white shadow-light-grey color-light-blue` }>
                <label>{this.props.name}</label>
                <i className="material-icons scan-img-size margin-top-5 ">nfc</i>
            </div>
        );
    }
}