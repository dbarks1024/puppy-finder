import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'native-base';
import { persistStore } from 'redux-persist';
import Router from './Router';
import { store } from './store/index';

class App extends Component {   
    constructor() {
      super();
      this.state = { rehydrated: false };
    }

    componentWillMount() {
      persistStore(store, {}, () => {
        this.setState({ rehydrated: true });
      });
    }
    render() {
        if(!this.state.rehydrated) {
          return (
          <Text>Loading</Text>
          );
        }
        return (
        <Provider store={store}>
            <Router />
        </Provider>
        );
    }
}

export default App;
