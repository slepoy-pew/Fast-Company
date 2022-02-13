import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage/usersListPage";
import UserPage from "../components/page/userPage/userPage";
import UserPageEdit from "../components/page/userPageEdit";

const Users = () => {
    const [selectedUserId, setSelectedUserId] = useState();
    const [editUser, setEditUser] = useState();
    const [updateDataUser, setUpdateDataUser] = useState();

    const handleGetUsersId = (id) => {
        setSelectedUserId(id);
    };

    const handleEditUser = (user) => {
        setEditUser(user);
    };

    const handleUpdateUser = (editUser) => {
        setUpdateDataUser(editUser);
    };

    return (
        <div className="d-flex">
            <Switch>
                <Route
                    path="/users"
                    exact
                    render={() => (
                        <UsersListPage onGetUsersId={handleGetUsersId} />
                    )}
                />
                <Route
                    path={`/users/${selectedUserId}/edit`}
                    render={() => (
                        <UserPageEdit
                            user={editUser}
                            onUpdateUser={handleUpdateUser}
                        />
                    )}
                />
                <Route
                    path={`/users/${selectedUserId}`}
                    render={() => (
                        <UserPage
                            userId={selectedUserId}
                            onEditUser={handleEditUser}
                            updateUser={updateDataUser}
                        />
                    )}
                />
            </Switch>
        </div>
    );
};

export default Users;
