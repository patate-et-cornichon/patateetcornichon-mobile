import { applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';

import ReactotronConfig from '../ReactotronConfig';
import reducers from '../reducers';
import sagas from './sagas';

const sagaMonitor = ReactotronConfig.createSagaMonitor();
const sagaMiddleware = reduxSaga({ sagaMonitor });

// @ts-ignore
export const store = ReactotronConfig.createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);
