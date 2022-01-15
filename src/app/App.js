import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./components/pages/main";
import Login from "./components/pages/login";
import Users from "./components/pages/users";

function App() {
    return (
        <div className="container pt-3">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
