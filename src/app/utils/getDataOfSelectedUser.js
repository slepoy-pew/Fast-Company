import React from "react";

export function getDataOfSelectedUser(user) {
    const arrayData = Object.entries(user).slice(1, 6);
    const initialUserData = new Map(arrayData);
    const finalUserData = [];

    for (const [key, value] of initialUserData) {
        if (key === "name") {
            finalUserData.push(value);
        }
        if (key === "profession") {
            finalUserData.push(`Профессия: ${value.name}`);
        }
        if (Array.isArray(value)) {
            finalUserData.push(value.map((item) => {
                return (
                    <span className={"badge bg-" + item.color + " ms-1"} key={item.name}>
                        {item.name}
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
