import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index';

import Adapter from './containers/Adapter/index';
import "typeface-roboto";
import './stylesheets/defaults.scss';

const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
)

render((
    <Provider store={ store }>
        <Adapter />
    </Provider>
), document.getElementById('app'));
