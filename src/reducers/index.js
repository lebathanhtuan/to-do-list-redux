import { combineReducers } from "redux";
import listToDo from "./listToDo";

const myReducer = combineReducers({
    listToDo
});

export default myReducer;