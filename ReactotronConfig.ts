import { NativeModules } from 'react-native';
import reactotronReactNative from 'reactotron-react-native';
// @ts-ignore
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';
// @ts-ignore
import url from 'url';

const { hostname: host } = url.parse(NativeModules.SourceCode.scriptURL);

export default reactotronReactNative
  .configure({ host })
  .use(reactotronReduxSaga())
  .use(reactotronRedux())
  .useReactNative()
  .connect();
