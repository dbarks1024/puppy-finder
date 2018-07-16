import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import { store, persistor } from './store/index';

class App extends Component {   
    render() {
      //  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
        <Provider store={store} persistor={persistor}>
            <Router />
        </Provider>
        );
    }
}

export default App;
