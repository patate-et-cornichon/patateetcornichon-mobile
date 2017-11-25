import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import Header from '../components/Header/Header';
import {MaterialIcons} from '@expo/vector-icons';
import {MaterialCommunityTabBarIcon} from '../components/Icons/TabBarIcon/TabBarIcon';


class RecipesContainer extends React.Component {
    static navigationOptions = {
        header: (
            <Header title={'À table !'}
            />
        ),
        tabBarIcon: ({focused, tintColor}) => <MaterialCommunityTabBarIcon name='hamburger'
                                                                           tintColor={tintColor}
                                                                           focused={focused}
        />
    };

    render() {
        return (
            <Text>hello</Text>
        )
    }
}

const mapStateToProps = state => ({
    //
});

const mapDispatchToProps = dispatch => ({
    //
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);