import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import { dataOfSelectedUser } from "../../../utils/dataOfSelectedUser";

const UserPage = ({ userId, onEditUser, updateUser }) => {

    const [dataUser, setDataUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => setDataUser(data));
    }, []);

    const history = useHistory();

    const handleShowAllUsers = () => {
        history.push("/users");
    };

    return (
        <>
            {!dataUser ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    <ul className="list-group list-group-flush">
                        {dataOfSelectedUser(
                            updateUser ? updateUser : dataUser
                        ).map((item) => (
                            <li className="list-group-item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link
                        to={`/users/${userId}/edit`}
                        role="button"
                        className="btn btn-outline-dark btn-lg mt-3 me-3"
                        onClick={() => onEditUser(dataUser)}
                    >
                        ИЗМЕНИТЬ
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-lg mt-3"
                        onClick={() => handleShowAllUsers()}
                    >
                        ВСЕ ПОЛЬЗОВАТЕЛИ
                    </button>
                </div>
            )}
        </>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
    onEditUser: PropTypes.func.isRequired,
    updateUser: PropTypes.object
};

export default UserPage;
