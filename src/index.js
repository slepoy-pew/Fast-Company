import React from "react";
import reactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";
import history from "./app/utils/history";

const store = createStore();

reactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
