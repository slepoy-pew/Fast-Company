import React, { useState } from "react";
import PropTypes from "prop-types";
import { toggleSortPointer } from "../utils/toggleSortPointer";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const [pointerOrder, setPointerOrder] = useState("");
    const [pointerName, setPointerName] = useState("");

    const handleSort = (itemPath, itemName) => {
        if (selectedSort.path === itemPath) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
            pointerSort(
                selectedSort.order === "asc" ? "desc" : "asc",
                itemName
            );
        } else {
            onSort({ path: itemPath, order: "asc" });
            pointerSort("asc", itemName);
        }
    };

    const pointerSort = (order, name) => {
        setPointerOrder(order);
        setPointerName(name);
    };

    return (
        <thead className="table-dark">
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => {
                                      handleSort(
                                          columns[column].path,
                                          columns[column].name
                                      );
                                  }
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {columns[column].name === pointerName
                            ? toggleSortPointer(pointerOrder)
                            : undefined}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
