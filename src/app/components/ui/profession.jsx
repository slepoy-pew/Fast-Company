import React from "react";
import PropTypes from "prop-types";
import { useProfessons } from "../../hooks/useProfession";

const Profession = ({ id }) => {
    // console.log("id:", id);
    const { isLoading, getProfession } = useProfessons();
    const prof = getProfession(id);
    // console.log("prof:", prof);
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "loading...";
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
