import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'utils/configureStore';
import Status from 'containers/Status';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Status repoId="default" />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
