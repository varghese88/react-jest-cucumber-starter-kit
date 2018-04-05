import React, { Component } from 'react';
class Home extends Component {
  render() {
    const { displayCartPage } = this.props;
    return (
      <div className="flex-column full-height">
          <div className="flex-center flex-basis-20"><i className="material-icons scan-img-size">nfc</i></div>
          <div className="flex-center flex-basis-5">Scan a Reciept</div>
          <div className="flex-center flex-basis-20">
            <div className="flex full-width">
                <input type="text" name="lname" className="input-txt"/>
                <button id="test" onClick= {() => displayCartPage() }>test</button>
            </div>
          </div>
          <div className="flex-center flex-basis-55"><i className="material-icons logo-size">home</i></div>
      </div>
    );
  }
}

export default Home