import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import PrivateRoutes from '../navigation/privateRoutes';
import PublicRoutes from '../navigation/publicRoutes';


class InitialContainer extends React.Component {
    render() {
        const {auth: {isLogged}} = this.props;

        return (
            <View style={{flex: 1}}>
                {
                    isLogged ?
                        <PrivateRoutes/> :
                        <PublicRoutes/>
                }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(InitialContainer);