import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppWithNavigationState from './containers/Navigation';


const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
);

export default Root;