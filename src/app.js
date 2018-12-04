import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index';

import HOC from './containers/Adapter/index';
import Loading from './containers/Loading/index';
import "typeface-roboto";
import './stylesheets/defaults.scss';


const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
)

HOC().then((Component) => {
  render((
      <Provider store={ store }>
        { Component }
      </Provider>
  ), document.getElementById('app'));
}).catch((error) => {
  render((
    <Provider store={ store }>
      <Loading text={ error } />
    </Provider>
  ), document.getElementById('app'));
});
