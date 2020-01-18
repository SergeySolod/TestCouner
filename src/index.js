import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PLUS_ONE_EVERY_SECOND} from './redux/reducers/couners-reducer'

setInterval(() => {
    store.dispatch({type: PLUS_ONE_EVERY_SECOND})
}, 1000)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
