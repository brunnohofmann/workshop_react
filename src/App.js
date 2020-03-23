import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import ClassComponentExample from "./components/ClassComponentExample";

function App () {
  return (
    <ReduxProvider store={store}>
      <ClassComponentExample />
    </ReduxProvider>
  );
}

export default App;
