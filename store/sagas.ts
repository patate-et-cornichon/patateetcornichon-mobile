import { all, takeLatest } from 'redux-saga/effects';

import { fetchExplorerLastRecipes } from '../actions/explorer';
import * as EXPLORER_TYPES from '../types/explorer';

export default function* rootSaga() {
  yield all([
    takeLatest(EXPLORER_TYPES.FETCH_EXPLORER_LAST_RECIPES_REQUEST, fetchExplorerLastRecipes),
  ]);
}
