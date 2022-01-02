import React from "react";

export function toggleSortPointer(item) {
   const upPointer = <i className="bi bi-caret-up-square-fill" />;
   const downPointer = <i className="bi bi-caret-down-square-fill" />;

   return item === "asc" ? upPointer : downPointer;
}
