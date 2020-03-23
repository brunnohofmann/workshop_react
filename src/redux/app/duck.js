import {ACTION_TYPES} from '../actionTypes';

const INITIAL_STATE = {
  token: null,
};

export const appActions = {
  setToken: token => ({
    type: ACTION_TYPES.APP.SET_TOKEN,
    token,
  }),
};


export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.APP.SET_TOKEN:
      return {...state, token: action.token };
    default:
      return state

  }
};

