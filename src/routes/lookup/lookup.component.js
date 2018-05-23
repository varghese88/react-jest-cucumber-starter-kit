import React, { Component } from 'react';
import {CustomButton } from '../../components/button/button.component';

class Home extends Component {
  componentDidMount(){
    //this.props.getPostData();
  }
  render() {
    const { displayCartPage } = this.props;
    return (
      <div className="flex-column full-size color-header font-xl">
          <div className="flex-horizontal-center flex-basis-25 margin-hoz-15">Welcome to App</div>
          <div className="flex-center flex-basis-25 margin-hoz-15">Hava a receipt? Scan now. 
            <i className="material-icons scan-img-size padding-left-5">nfc</i></div>
          <div className="flex-center flex-basis-50 margin-hoz-15 padding-ver-5">
              <CustomButton onClick= {() => displayCartPage()} name="Payment Lookup" className="flex-basis-50 full-height margin-right-4" />
              <CustomButton onClick= {() => displayCartPage()} name="Other Lookup" className="flex-basis-50 full-height margin-left-4" />
              {/* <button id="test" onClick= {() => displayCartPage() }>test</button> */}
          </div>
      </div>
    );
  }
}

export default Home