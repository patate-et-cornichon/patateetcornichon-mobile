import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { PaginatedRecipes } from '../interfaces/recipe';
import * as TYPES from '../types/explorer';

export const api = (url: string) => fetch(url).then(response => response.json());

/**
 * Make a last recipes request
 */
export const fetchExplorerLastRecipesRequest = () => ({
  type: TYPES.FETCH_EXPLORER_LAST_RECIPES_REQUEST,
});

/**
 * Fetch last recipes
 */
export function* fetchExplorerLastRecipes(): SagaIterator {
  try {
    const response: PaginatedRecipes = yield call(api, 'https://testing-api.patateetcornichon.com/recipes/?page_size=3');
    yield put({
      type: TYPES.FETCH_EXPLORER_LAST_RECIPES_SUCCESS,
      data: response.results,
    });
  } catch (e) {
    yield put({
      type: TYPES.FETCH_EXPLORER_LAST_SELECTION_FAILURE,
      error: 'Oups, il y a eu une erreur !',
    });
  }
}
