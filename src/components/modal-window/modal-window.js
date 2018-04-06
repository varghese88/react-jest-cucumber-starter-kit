import React, { Component } from "react";
import PropTypes from 'prop-types';
import './modal-window.css';

class ModalWindow extends Component {
    
    static modals = [];
    static open = (id, callback) =>  {
        let modal = ModalWindow.modals.find( obj => obj.props.id === id);
        modal.setState({isHidden : false});
        callback && callback();
    }

    static close = (id,callback) => {
        let modal = ModalWindow.modals.find( obj => obj.props.id === id);
        modal.setState({isHidden : true});
        callback && callback();
    }
    constructor(){
        super();
        this.state = {
            isHidden: true
        };
    }
    
    componentDidMount(){
        ModalWindow.modals.push(this);
    }

    componentWillUnmount(){
        ModalWindow.modals =ModalWindow.modals.filter((obj) => obj.props.id === this.props.id)
    }

    handleClick(e){
        if(e.target.className === "modal-window-body" && !this.props.disableClick){
            ModalWindow.close(this.props.id)(e);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // Store prevUserId in state so we can compare when props change.
        // Clear out any previously-loaded user data (so we don't render stale stuff).
        if (nextProps.hidden !== prevState.isHidden) {
          return {
            isHidden: nextProps.hidden,
          };
        }
    
        // No state update necessary
        return null;
    }

    render(){
        const isDisplay = {
            display: this.state.isHidden? 'none':''
        };
        return (
            <div style={isDisplay} className="modal-window" onClick={(e) => this.handleClick(e)} >
                <div className="modal-window-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ModalWindow.propTypes = {
    id: PropTypes.string.isRequired,
    hidden:PropTypes.bool,
    disableClick:PropTypes.bool.isRequired
}

ModalWindow.defaultProps ={
    disableClick:true
}

export { ModalWindow} ;