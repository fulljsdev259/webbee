import { combineReducers } from "redux";
import manageTypes from './manage-types/reducer'

 const appReducer = combineReducers({
    manageTypes,
});


export default appReducer;