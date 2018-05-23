import React, { Component } from 'react';
class Header extends Component {
  render() {
    const { className} = this.props;
    return (
      <div className={className}>
          <div className="flex-center flex-basis-5"><i className="material-icons logo-size">home</i></div>
          <div className="flex-column flex-vertical-center flex-basis-95 color-white margin-left-1">
            <div className="font-m margin-bottom-1">Returns</div>
            <div  className="flex font-s">
              <div>Varghese John</div>
              <div className="margin-left-1">|</div>
              <div className="margin-left-1">store #2711</div>
              <div className="margin-left-1">|</div>
              <div className="margin-left-1">Atlanta</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Header