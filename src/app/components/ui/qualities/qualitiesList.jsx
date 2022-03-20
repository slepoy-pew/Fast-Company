import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";
import _ from "lodash";

const QualitiesList = ({ qualities }) => {
    const { isLoading, getQualities } = useQualities();
    const qualitiesResult = _.flatten(getQualities(qualities));

    return (
        <>
            {!isLoading
                ? qualitiesResult.map((qual) => (
                    <Quality {...qual} key={qual._id} />
                ))
                : "loading..."
            }
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
