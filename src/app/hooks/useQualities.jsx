import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import qualityService from "../service/quality.service";

const QualitiesContex = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContex);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getQualitiesList() {
        try {
            const { content } = await qualityService.get();
            setQualities(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    useEffect(() => {
        getQualitiesList();
    }, []);

    function getQualities(qualitiesID) {
        if (qualitiesID.length === 1) {
            return qualities.filter((q) => q._id === qualitiesID[0]);
        } else if (qualitiesID.length > 1) {
            return qualitiesID.map((id) => {
                return qualities.filter((q) => q._id === id
                );
            });
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <QualitiesContex.Provider value={{ isLoading, qualities, getQualities }}>
            {children}
        </QualitiesContex.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), PropTypes.node
    ])
};
