import { handleActions } from "redux-actions";
import update from "immutability-helper";
import { reduxConstants } from "../constants";
import { getUUID } from "../../utils/formats";
import { fieldType, getCategoryDefaultDetails } from "../../services/static-data";

const initialState = {
  categories: {},
  categoriesItems: {}
};

const addCategory = (state: any, action: any) => {
  let categories = { ...state.categories }
  const newCate = { ... getCategoryDefaultDetails()}
  categories[newCate.id] = newCate
  return update(state, {
    categories: { $set: categories },
  });
};

const deleteCategory = (state: any, action: any) => {
  const categories = { ...state.categories }
  delete categories[action.payload.id]

  return update(state, {
    categories: { $set: categories },
  });
};


const addAttributeToCategory = (state: any, action: any) => {
  const categories = { ...state.categories }
  const category = categories[action.payload.id]
  category.attributes[getUUID()] = action.payload.data

  category.attributeTypes = Object.values(category.attributes).map((attribute: any) => attribute.type)

  return update(state, {
    categories: { $set: categories },
  });
};

const categoryAttributeChange = (state: any, action: any) => {
  const { categoryId, attributeId, data } = action.payload
  const categories = { ...state.categories }
  const category = categories[categoryId]

  if(data.type === fieldType.REMOVE) {
    delete category.attributes[attributeId]
  } else {
    category.attributes[attributeId] = data
  }

  // to update the title fields list
  category.titleField.list = Object.values(category.attributes).map((attribute: any) => ({
      id: getUUID(),
      lable: String(attribute.value),
      value: attribute.value
  }))

  category.attributeTypes = Object.values(category.attributes).map((attribute: any) => attribute.type)

  return update(state, {
    categories: { $set: categories },
  });
};

const updateTitleFiled = (state: any, action: any) => {
  const { categoryId, value } = action.payload;
  const categories = { ...state.categories }
  const category = categories[categoryId]
  category.titleField.value = value;

  return update(state, {
    categories: { $set: categories },
  });
};

const updateCategoryName = (state: any, action: any) => {
  const { categoryId, value } = action.payload;
  const categories = { ...state.categories }
  const category = categories[categoryId]
  category.categoryName.value = value;
  
  return update(state, {
    categories: { $set: categories },
  });
};

const addCategoryItem = (state: any, action: any) => {

  const { categoryId  } = action.payload;
  const categoriesItems = { ...state.categoriesItems }


  categoriesItems[categoryId] = {...categoriesItems[categoryId]}
  categoriesItems[categoryId]["items"] =  { ...categoriesItems[categoryId]["items"]}
  categoriesItems[categoryId]["items"][getUUID()] = {} 
  
  return update(state, {
    categoriesItems: { $set: categoriesItems },
  });
};

const deleteCategoryItem = (state: any, action: any) => {
  const { categoryId, itemId } = action.payload
  const categoriesItems = { ...state.categoriesItems }
  const category = categoriesItems[categoryId]
  delete category.items[itemId]
  
  return update(state, {
    categoriesItems: { $set: categoriesItems },
  });
};

const updateCategoryItem = (state: any, action: any) => {

  console.log(action, '>>>>>>>');
  
  const { categoryId, itemId, attributeId, value } = action.payload
  const categoriesItems = { ...state.categoriesItems }
  const category = categoriesItems[categoryId]
  category.items[itemId][attributeId] = value
  
  return update(state, {
    categoriesItems: { $set: categoriesItems },
  });
};


export default handleActions(
  {
    [reduxConstants.ADD_CATEGORY] : addCategory,
    [reduxConstants.DELETE_CATEGORY] : deleteCategory,
    [reduxConstants.ADD_ATTRIBUTE_TO_CATEGORY] : addAttributeToCategory,
    [reduxConstants.CATEGORY_ATTRIBUTE_CHANGE] : categoryAttributeChange,
    [reduxConstants.UPDATE_CAGEGORY_TITLE_FIELD]: updateTitleFiled,
    [reduxConstants.UPDATE_CAGEGORY_NAME]: updateCategoryName,

    [reduxConstants.ADD_CATEGORY_ITEM] : addCategoryItem,
    [reduxConstants.DELETE_CATEGORY_ITEM] : deleteCategoryItem,
    [reduxConstants.UDPATE_CATEGORY_ITEM] : updateCategoryItem,
  },
  initialState
);
