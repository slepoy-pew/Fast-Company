import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "../usersList";
import UserPage from "../userPage";

const Users = () => {
    const [selectedUserId, setSelectedUserId] = useState("id");

    const handleGetUsersId = (id) => {
        setSelectedUserId(id);
    };

    return (
        <div className="d-flex">
            <Switch>
                <Route
                    path="/users"
                    exact
                    render={() => <UsersList onGetUsersId={handleGetUsersId} />}
                />
                {selectedUserId ? (
                    <Route
                        path={`/users/${selectedUserId}`}
                        render={() => <UserPage userId={selectedUserId} />}
                    />
                ) : (
                    ""
                )}
            </Switch>
        </div>
    );
};

export default Users;
