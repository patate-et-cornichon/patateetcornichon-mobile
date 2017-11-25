import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as recipesActions from '../actions/recipesActions';
import Home from '../screens/Home/Home';
import MainHeader from '../containers/MainHeader';
import {MaterialTabBarIcon} from '../components/Icons/TabBarIcon/TabBarIcon';


class HomeContainer extends React.Component {
    static navigationOptions = {
        header: <MainHeader title='À table !'/>,
        tabBarIcon: ({focused, tintColor}) => <MaterialTabBarIcon name='home'
                                                                  tintColor={tintColor}
                                                                  focused={focused}
        />
    };

    render() {
        return (
            <Home {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes,
    nav: state.nav
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(recipesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);