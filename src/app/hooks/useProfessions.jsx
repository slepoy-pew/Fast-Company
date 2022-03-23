import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import professionService from "../service/profession.service";
import { toast } from "react-toastify";

const ProfessionContext = React.createContext();

export const useProfessions = () => {
    return useContext(ProfessionContext);
};

export const ProfessionProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [profession, setProfession] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProfessionsList();
    }, []);

    function getProfession(id) {
        return profession.find((p) => p._id === id);
    }

    async function getProfessionsList() {
        try {
            const { content } = await professionService.get();
            setProfession(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <ProfessionContext.Provider value={{ isLoading, profession, getProfession }}>
            {children}
        </ProfessionContext.Provider>
    );
};

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), PropTypes.node
    ])
};
