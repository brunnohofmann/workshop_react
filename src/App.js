import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
// import ClassComponentExample from "./components/ClassComponentExample";
import FuncCompExample from './components/FuncCompExample'

function App () {
  return (
    <ReduxProvider store={store}>
      <FuncCompExample />
    </ReduxProvider>
  );
}

export default App;
