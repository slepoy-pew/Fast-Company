import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import api from "../../api";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import SelectField from "../common/form/selectField";
import MultiSelectField from "../common/form/multiSelectField";
import { dataOfSelectedUser } from "../../utils/dataOfSelectedUser";
import { useHistory } from "react-router-dom";

const UserPageEdit = ({ user, onUpdateUser }) => {
    const objectUserData = _.fromPairs(dataOfSelectedUser(user, true));

    const [data, setData] = useState(objectUserData);
    const [professions, setProfession] = useState();
    const [qualities, setQualities] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const history = useHistory();

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleUpdateUserPage = (data) => {
        const cloneUser = Object.assign({}, user);
        const updateUser = Object.assign(cloneUser, data);

        onUpdateUser(updateUser);
        history.push(`/users/${user._id}`);
    };

    return (
        <form>
            <TextField
                label="Имя"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите Ваш пол"
            />
            <SelectField
                label="Выберите Вашу профессию"
                value={data.profession}
                name="profession"
                onChange={handleChange}
                options={professions}
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={data.qualities}
                name="qualities"
                label="Выберите Ваши качества"
            />
            <button
                type="button"
                className="btn btn-outline-dark btn-lg mt-3"
                onClick={() => handleUpdateUserPage(data)}
            >
                ОБНОВИТЬ
            </button>
        </form>
    );
};

UserPageEdit.propTypes = {
    user: PropTypes.object.isRequired,
    onUpdateUser: PropTypes.func.isRequired
};

export default UserPageEdit;
