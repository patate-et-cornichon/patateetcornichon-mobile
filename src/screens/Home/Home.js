import React from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import ScrollRecipes from '../../containers/ScrollRecipes';


class Home extends React.Component {
    state = {
        refreshing: false
    };

    /**
     * Fetch the Home Recipes
     *
     * @returns {Promise}
     * @private
     */
    async _onRefresh() {
        const {getHomeRecipes} = this.props.actions;

        this.setState({refreshing: true});
        try {
            await getHomeRecipes(7);
        } finally {
            this.setState({refreshing: false});
        }
    }

    render() {
        const {recipes, navigation} = this.props;

        return (
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={() => this._onRefresh()}
                />
            }>
                <ScrollRecipes recipes={recipes.lastRecipes}
                               recipesCategory={'Les dernières recettes'}
                               navigation={navigation}
                />
                <ScrollRecipes recipes={recipes.sweetRecipes}
                               recipesCategory={'Les recettes sucrées'}
                               navigation={navigation}
                />
                <ScrollRecipes recipes={recipes.saltyRecipes}
                               recipesCategory={'Les recettes salées'}
                               navigation={navigation}
                />
            </ScrollView>
        );
    }
}

export default Home;