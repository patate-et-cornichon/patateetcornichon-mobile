import {NavigationActions} from 'react-navigation';
import AppNavigator from '../navigation';
import {LOG_PROCESS_FINISHED, LOGOUT} from '../actions/actionTypes';


const getCurrentRouteName = (state) => {
    const route = state.routes[state.index];
    return typeof route.index === 'undefined' ? route.routeName : getCurrentRouteName(route);
};

export default (state, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);

    if (action.type === LOG_PROCESS_FINISHED && action.isLogged) {
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName: 'PrivateRoutes'}),
            state
        );
    } else if (action.type === LOGOUT) {
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({routeName: 'PublicRoutes'}),
            state
        );
    }

    if (state && nextState) {
        const stateRouteName = getCurrentRouteName(state);
        const nextStateRouteName = getCurrentRouteName(nextState);
        return stateRouteName === nextStateRouteName ? state : nextState;
    }

    return nextState || state;
};