import { handleActions } from "redux-actions";
import update from "immutability-helper";
import { reduxConstants } from "../constants";
import { getUUID } from "../../utils/formats";
import { fieldType, getCategoryDefaultDetails } from "../../services/static-data";

const initialState = {
    categoriesItems: {}
};

const addCategoryItem = (state: any, action: any) => {


    console.log(action, 'actionactionaction');
    
    
    const { categoryId } = action.payload;
    const categories = { ...state.categories }
    const categoriesItems = { ...state.categoriesItems }
  
    console.log(action, categories, categoriesItems,'actionaction');
  
    const category = categories[categoryId]
    const itemFields: any = {} 
  
    Object.keys(category.attributes).forEach((key) => {
      const newId = getUUID()
      const details = category.attributes[key]
      itemFields[newId] = {}
      itemFields[newId]["label"] = details.value
      itemFields[newId]["value"] = ''
      itemFields[newId]["type"] = details.type
    })
  
  
  
    categoriesItems[categoryId] = {}
    categoriesItems[categoryId]["items"] = { ...categoriesItems[categoryId]["items"], ...itemFields }
  
    console.log(itemFields, 'itemFields');
    
  
    
    return update(state, {
      categoriesItems: { $set: categoriesItems },
    });
  };


export default handleActions(
  {
    // [reduxConstants.ADD_CATEGORY_ITEM] : addCategoryItem,
  },
  initialState
);
