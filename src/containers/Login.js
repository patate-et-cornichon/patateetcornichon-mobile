import React from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import Login from '../screens/Login/Login';


class LoginContainer extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(LoginContainer);