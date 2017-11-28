import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../actions/authActions';
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

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);