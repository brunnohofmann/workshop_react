import { ACTION_TYPES } from '../actionTypes';

const INITIAL_STATE = {
  token: null,
  user: {
    name: '',
    email: ''
  }
};

export const appActions = {
  setToken: token => ({
    type: ACTION_TYPES.APP.SET_TOKEN,
    token,
  }),
  addUser: user => ({
    type: ACTION_TYPES.APP.ADD_USER,
    user
  })
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.APP.SET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    case ACTION_TYPES.APP.ADD_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
};

