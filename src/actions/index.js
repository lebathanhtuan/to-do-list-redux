import * as types from "./../constants/ActionTypes";

export const showList = () => {
    return{
        type: types.SHOW_LIST
    }
}
export const addItem = (value) => {
    return{
        type: types.ADD_ITEM,
        value
    }
}
export const deleteItem = (id) => {
    return{
        type: types.DELETE_ITEM,
        id
    }
}
export const editItem = (id, value) => {
    return{
        type: types.EDIT_ITEM,
        id,
        value
    }
}
export const filterItem = (value) => {
    return{
        type: types.FILTER_ITEM,
        value
    }
};