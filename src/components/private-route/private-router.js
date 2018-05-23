import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRouteComponent extends React.Component {
    render(){
        const { component, isAuthenticated, ...rest} = this.props;
        return (
            <route 
                {...rest}
                render= { props => isAuthenticated ?
                    <component {...props}/> : 
                    <Redirect 
                        to={{pathname:"/login",
                        state:{from :props.location}}}/>
                }
            />  
        );
    }
}

const mapStateToProps = state =>({
    isAuthenticated:state.loginReducer.authenticated
})

export const PrivateRoute = connect(mapStateToProps,{})(PrivateRouteComponent);