import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ value, onChange }) => {
    return (
        <input
            className="form-control border-2 border-info"
            type="text"
            placeholder="Search..."
            value={value}
            onChange={onChange}
        />
    );
};

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchField;
