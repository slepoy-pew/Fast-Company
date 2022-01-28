import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length, foundUsers }) => {
    length = foundUsers > 0 ? foundUsers : length;
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "человек тусанет";
        }
        if (lastOne === 1) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        return "человек тусанет";
    };

    return (
        <h2 className="mb-2">
            <span
                className={"badge " + (length > 0 ? "bg-success" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}   с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired,
    foundUsers: PropTypes.number.isRequired
};

export default SearchStatus;
