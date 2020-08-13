import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "../common/routes";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "../redux/reducers";
import { renderRoutes } from "react-router-config";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, window.INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
