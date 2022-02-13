import React from "react";

export function dataOfSelectedUser(user, bool = false) {
    if (user) {
        if (user && bool === true) {
            const initialUserData = new Map(Object.entries(user).slice(1, 8));

            const finalUserData = [];

            function getDataQualities(arrQualiti) {
                const dataQualiti = arrQualiti.map((item) => {
                    return {
                        label: item.name,
                        value: item._id,
                        color: item.color
                    };
                });
                return dataQualiti;
            }

            for (const [key, value] of initialUserData) {
                if (key === "name") {
                    finalUserData.push([key, value]);
                }
                if (key === "email") {
                    finalUserData.push([key, value]);
                }
                if (key === "sex") {
                    finalUserData.push([key, value]);
                }
                if (key === "profession") {
                    finalUserData.push([key, value.name]);
                }
                if (Array.isArray(value)) {
                    finalUserData.push([key, getDataQualities(value)]);
                }
            }
            return finalUserData;
        } else {
            const initialUserData = new Map(Object.entries(user).slice(1, 8));

            const finalUserData = [];

            for (const [key, value] of initialUserData) {
                if (key === "name") {
                    finalUserData.push(value);
                }
                if (key === "profession") {
                    finalUserData.push(
                        typeof value === "string"
                            ? `Профессия: ${value}`
                            : `Профессия: ${value.name}`
                    );
                }
                if (Array.isArray(value)) {
                    finalUserData.push(
                        value.map((item) => {
                            return (
                                <span
                                    className={
                                        "badge bg-" + item.color + " ms-1"
                                    }
                                    key={item.name || item.label}
                                >
                                    {item.label ? item.label : item.name}
                                </span>
                            );
                        })
                    );
                }
                if (key === "completedMeetings") {
                    finalUserData.push(`CompletedMeetings: ${value}`);
                }
                if (key === "rate") {
                    finalUserData.push(`Rate: ${value}`);
                }
            }
            return finalUserData;
        }
    }
}
