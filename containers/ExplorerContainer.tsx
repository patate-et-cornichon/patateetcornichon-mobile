import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { fetchExplorerLastRecipesRequest } from '../actions/explorer';
import { Recipe } from '../interfaces/recipe';
import ExplorerScreen from '../screens/ExplorerScreen';

export interface ExplorerProps {
  lastRecipes: Recipe[];
  fetchExplorerLastRecipesRequest: () => void;
}

interface ExplorerState {
  explorer: {
    lastRecipes: {
      data: Recipe[];
    };
  };
}

const ExplorerContainer = (props: ExplorerProps) => (
  <ExplorerScreen {...props} />
);
ExplorerContainer.navigationOptions = {
  header: null,
};

const mapStateToProps = ({ explorer }: ExplorerState) => ({
  lastRecipes: explorer.lastRecipes.data,
});

const bindActionsToDispatch = (dispatch: Dispatch)  => ({
  fetchExplorerLastRecipesRequest: () => dispatch(fetchExplorerLastRecipesRequest()),
});

export default connect(mapStateToProps, bindActionsToDispatch)(ExplorerContainer);
