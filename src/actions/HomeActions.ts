const ACTION_HOME_LOADING = 'ACTION_HOME_LOADING';
const ACTION_HOME_LOADED = 'ACTION_HOME_LOADED';
const ACTION_ERROR = 'ACTION_ERROR';

export const homeReducer = (state = {}, action) => {
  console.log('home: =>', action);
  switch (action.type) {
    case ACTION_HOME_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_HOME_LOADED:
      return {
        ...state,
        isLoading: false,
        response: action.response,
      };
    case ACTION_ERROR:
      return {
        ...state,
      };
    default:
      return {...state};
  }
};

export function homeApi() {
  console.log('===> homeAPI');
  return dispatch => {
    console.log('===> disptch/ homeApi');
    dispatch({type: ACTION_HOME_LOADING});
    setTimeout(() => {
      dispatch({type: ACTION_HOME_LOADED, response: {message: 'HELLO'}});
    }, 1000);
  };
}
