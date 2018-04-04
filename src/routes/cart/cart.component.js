import React, { Component } from 'react';
class Cart extends Component {
  render() {
    return (
      <div className="flex-column full-height">
          <div className="flex-center flex-basis-20"><i className="material-icons scan-img-size">nfc</i></div>
          <div className="flex-center flex-basis-5">Cart Page</div>
          <div className="flex-center flex-basis-20">
            <div className="flex full-width">
                <input type="text" name="lname" className="input-txt"/>
                <button onClick= {() => this.props.history.push('/cart/payment',{isModalOpen:true})}>test</button>
            </div>
          </div>
          <div className="flex-center flex-basis-55"><i className="material-icons logo-size">home</i></div>
      </div>
    );
  }
}

export default Cart