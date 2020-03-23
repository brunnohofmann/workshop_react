import {createStore, combineReducers} from 'redux';

import reducers from './reducers';

const reducer = combineReducers(reducers);

let store = createStore(
  reducer,
);

export {store};
