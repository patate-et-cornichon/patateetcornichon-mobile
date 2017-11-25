import AppNavigator from '../navigation';


const getCurrentRouteName = (state) => {
    const route = state.routes[state.index];
    return typeof route.index === 'undefined' ? route.routeName : getCurrentRouteName(route);
};

export default (state, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    /**
     * Prevents navigating twice to the same route
     */
    if (state && nextState) {
        const stateRouteName = getCurrentRouteName(state);
        const nextStateRouteName = getCurrentRouteName(nextState);
        return stateRouteName === nextStateRouteName ? state : nextState;
    }

    return nextState || state;
};