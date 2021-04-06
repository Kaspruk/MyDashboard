const SET_APP_LOADING = 'root/setAppLoading';
const SET_IS_LOGGED = 'root/setIsLogged';
const SET_IS_APP_EL_VISIBLE = 'root/setIsAppElVisible';

const initState = {
    isLogged: false,
    appLoading: false,
    isAppElVisible: false,
}

export default (state = initState, action) => {
    console.dir(action);
    switch (action.type) {
        case SET_APP_LOADING:
            state.appLoading = action.payload;
            break;
        case SET_IS_LOGGED:
            state.isLogged = action.payload;
            break;
        case SET_IS_APP_EL_VISIBLE:
            state.isAppElVisible = action.payload;
            break;
    }

    return state;
}

export const setIsLogged = payload => ({ type: SET_APP_LOADING, payload })
export const setAppLoading = payload => ({ type: SET_IS_LOGGED, payload })
export const setIsAppElVisible = payload => ({ type: SET_IS_APP_EL_VISIBLE, payload })