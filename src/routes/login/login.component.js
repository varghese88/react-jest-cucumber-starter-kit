import React, { Component } from 'react';
class Login extends Component {
  render() {
    return (
      <div className="flex full-size">
          <div className="flex-center flex-basis-50">
              <div className="flex-column bg-white flex-basis-50 shadow-light-grey padding-hoz-1">
                  <div className="padding-ver-1 padding-top-9">Provide your login credentials below</div>
                  <div className="flex-horizontal-center padding-bottom-7"> <input className="margin-right-2" type="radio" /> Store Number</div>
                  <div className="padding-bottom-2 font-xm">Store Number</div>
                  <div className="padding-bottom-5">
                    <input className="full-width txtfield-size light-grey-border" type="text" />
                  </div>
                  <div className="padding-bottom-2 font-xm">User ID</div>
                  <div className="padding-bottom-5">
                    <input className="full-width txtfield-size light-grey-border" type="text" />
                  </div>
                  <div className="padding-bottom-2 font-xm">Password</div>
                  <div className="padding-bottom-5">
                    <input className="full-width txtfield-size light-grey-border" type="password" />
                  </div>
                  <div className="flex-center margin-bottom-9 txtfield-size bg-lightgrey shadow-light-grey">login </div>                  
              </div>
          </div>
          <div className="flex-center flex-basis-50">Cart Page</div>
      </div>
    );
  }
}

export default Login