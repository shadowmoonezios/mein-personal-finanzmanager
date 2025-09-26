import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Mein Personal Finanzmanager</h1>
      </div>
    </Provider>
  );
}

export default App;
