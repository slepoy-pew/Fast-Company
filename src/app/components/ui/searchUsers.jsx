import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchField from "../common/form/searchField";

const SearchUsers = ({ users, onShowChosenUsers, selectedItem }) => {
    const [dataInput, setDataInput] = useState("");

    useEffect(() => {
        getValue();
    }, [dataInput]);

    const getValue = () => {
        const chosenUsers =
            users && dataInput
                ? users.filter((item) => {
                      return (
                          item.name
                              .toLowerCase()
                              .indexOf(dataInput.toLowerCase()) > -1
                      );
                  })
                : [];
        onShowChosenUsers(chosenUsers);
    };

    const handleChange = ({ target }) => {
        setDataInput(target.value);
    };

    return (
        <div className="mb-2">
            <SearchField
                value={
                    selectedItem && dataInput !== ""
                        ? setDataInput("")
                        : dataInput
                }
                onChange={handleChange}
                selectedItem={selectedItem}
            />
        </div>
    );
};

SearchUsers.propTypes = {
    users: PropTypes.array,
    onShowChosenUsers: PropTypes.func,
    selectedItem: PropTypes.object
};

export default SearchUsers;
