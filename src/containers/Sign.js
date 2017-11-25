import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Platform, StatusBar} from 'react-native';
import * as authActions from '../actions/authActions';
import Sign from '../screens/Login/Sign/Sign';
import {backgroundColor} from '../screens/Login/Sign/styles';
import {fontColor} from '../config/styles';


class SignContainer extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {target} = navigation.state.params;
        const title = target === 'create' ? 'Créer un compte' : 'S\'identifier';

        return ({
            title: title,
            headerTintColor: fontColor,
            headerStyle: {
                backgroundColor: backgroundColor,
                shadowColor: 'transparent',
                marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
            },
        });
    };

    render() {
        return (
            <Sign {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    isConnected: state.network,
    components: state.components
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer);