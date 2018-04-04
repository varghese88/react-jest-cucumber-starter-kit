import React, { Component } from 'react';
class Header extends Component {
  render() {
    const { className} = this.props;
    return (
      <div className={className}>
          <div className="flex-center flex-basis-5"><i className="material-icons logo-size">home</i></div>
          <div className="flex flex-basis-95"></div>
      </div>
    );
  }
}

export default Header