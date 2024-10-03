"use strict";
// UNION
function findPerson(cpf) {
    if (typeof cpf === "string") {
        return cpf.toUpperCase();
    }
    return cpf.toFixed(1);
}
findPerson(123);
