import React from "react";
import reactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
