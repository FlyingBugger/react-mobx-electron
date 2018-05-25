import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './router/index';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './Mobx/store';


const store = new AppStore();

ReactDOM.render(
  <Provider  store={store} >
    <Router / >
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
