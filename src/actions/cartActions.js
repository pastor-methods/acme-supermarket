import {ADD_ITEM, SUB_ITEM, REMOVE_ITEM} from "../types";


export const addItem = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
};

export const substractItem = (id) => {
    return {
        type: SUB_ITEM,
        id
    }
};

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
};
