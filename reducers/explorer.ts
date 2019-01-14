import { Recipe, Selection } from '../interfaces/recipe';
import * as TYPES from '../types/explorer';

interface ExplorerSectionState {
  error: null | string;
  isLoading: boolean;
  data: Recipe[] | Selection | null;
}

interface ExplorerState {
  lastRecipes: ExplorerSectionState;
  greatRecipes: ExplorerSectionState;
  lastSelection: ExplorerSectionState;
  randomSaltyRecipes: ExplorerSectionState;
  randomSweetRecipes: ExplorerSectionState;
}

interface ExplorerAction {
  type: string;
  data: Recipe[] | Selection;
  error: string;
}

const initialRecipesState = {
  data: [],
  error: null,
  isLoading: false,
};

const initialSelectionState = {
  data: null,
  error: null,
  isLoading: false,
};

const initialState: ExplorerState = {
  lastRecipes: initialRecipesState,
  greatRecipes: initialRecipesState,
  lastSelection: initialSelectionState,
  randomSaltyRecipes: initialRecipesState,
  randomSweetRecipes: initialRecipesState,
};

export default (state = initialState, action: ExplorerAction): ExplorerState => {
  const { lastRecipes, greatRecipes, lastSelection, randomSaltyRecipes, randomSweetRecipes } = state;
  const { data, error } = action;

  switch (action.type) {
    case TYPES.FETCH_EXPLORER_LAST_RECIPES_REQUEST:
      return {
        ...state,
        lastRecipes: {
          ...lastRecipes,
          isLoading: true,
        },
      };
    case TYPES.FETCH_EXPLORER_LAST_RECIPES_SUCCESS:
      return {
        ...state,
        lastRecipes: {
          ...lastRecipes,
          data,
          isLoading: false,
        },
      };
    case TYPES.FETCH_EXPLORER_LAST_RECIPES_FAILURE:
      return {
        ...state,
        lastRecipes: {
          ...lastRecipes,
          error,
        },
      };
    case TYPES.FETCH_EXPLORER_GREAT_RECIPES_REQUEST:
      return {
        ...state,
        greatRecipes: {
          ...greatRecipes,
          isLoading: true,
        },
      };
    case TYPES.FETCH_EXPLORER_GREAT_RECIPES_SUCCESS:
      return {
        ...state,
        greatRecipes: {
          ...greatRecipes,
          data,
          isLoading: false,
        },
      };
    case TYPES.FETCH_EXPLORER_GREAT_RECIPES_FAILURE:
      return {
        ...state,
        greatRecipes: {
          ...greatRecipes,
          error,
        },
      };
    case TYPES.FETCH_EXPLORER_LAST_SELECTION_REQUEST:
      return {
        ...state,
        lastSelection: {
          ...lastSelection,
          isLoading: true,
        },
      };
    case TYPES.FETCH_EXPLORER_LAST_SELECTION_SUCCESS:
      return {
        ...state,
        lastSelection: {
          ...lastSelection,
          data,
          isLoading: false,
        },
      };
    case TYPES.FETCH_EXPLORER_LAST_SELECTION_FAILURE:
      return {
        ...state,
        lastSelection: {
          ...lastSelection,
          error,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SALTY_RECIPES_REQUEST:
      return {
        ...state,
        randomSaltyRecipes: {
          ...randomSaltyRecipes,
          isLoading: true,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SALTY_RECIPES_SUCCESS:
      return {
        ...state,
        randomSaltyRecipes: {
          ...randomSaltyRecipes,
          data,
          isLoading: false,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SALTY_RECIPES_FAILURE:
      return {
        ...state,
        randomSaltyRecipes: {
          ...randomSaltyRecipes,
          error,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SWEET_RECIPES_REQUEST:
      return {
        ...state,
        randomSweetRecipes: {
          ...randomSweetRecipes,
          isLoading: true,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SWEET_RECIPES_SUCCESS:
      return {
        ...state,
        randomSweetRecipes: {
          ...randomSweetRecipes,
          data,
          isLoading: false,
        },
      };
    case TYPES.FETCH_EXPLORER_RANDOM_SWEET_RECIPES_FAILURE:
      return {
        ...state,
        randomSweetRecipes: {
          ...randomSweetRecipes,
          error,
        },
      };
    default:
      return state;
  }
};
