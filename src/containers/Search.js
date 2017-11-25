import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MainHeader from '../containers/MainHeader';
import {MaterialTabBarIcon} from '../components/Icons/TabBarIcon/TabBarIcon';
import Search from '../screens/Search/Search';


class SearchContainer extends React.Component {
    static navigationOptions = {
        header: (
            <MainHeader title={'Kesk\'on mange ?'}/>
        ),
        tabBarIcon: ({focused, tintColor}) => <MaterialTabBarIcon name='search'
                                                                  tintColor={tintColor}
                                                                  focused={focused}
        />
    };

    render() {
        return (
            <Search {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    //
});

const mapDispatchToProps = dispatch => ({
    //
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);