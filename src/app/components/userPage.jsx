import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";
import { getDataOfSelectedUser } from "../utils/getDataOfSelectedUser";

const UserPage = ({ userId }) => {
    const [dataUser, setDataUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setDataUser(data));
    }, [userId]);

    const history = useHistory();

    const showAllUsers = () => {
        history.push("/users");
    };

    return (
        <>
            {!dataUser ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    <ul className="list-group list-group-flush">
                        {getDataOfSelectedUser(dataUser).map((item) => (
                            <li className="list-group-item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-lg mt-3"
                        onClick={() => showAllUsers()}
                    >
                        Все пользователи
                    </button>
                </div>
            )}
        </>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
