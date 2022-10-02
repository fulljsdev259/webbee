import { combineReducers } from "redux";
import manageTypes from './manage-types/reducer'
import categoriesType from './category-type/reducer'

 const appReducer = combineReducers({
    manageTypes,
    categoriesType
});


export default appReducer;