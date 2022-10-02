import { getUUID } from "../utils/formats";

enum componentsId {
  TEXT_INPUT = "textInput",
  DROPDOWN = "dropdown",
  TEXTINPUT_DROPDOWN = "textInputDropdown",
}

export enum fieldType {
  TEXT = "text",
  NUMBER = "number",
  DATE = "date",
  CHECKBOX = "checkbox",
  REMOVE = "remove",
}

export const fieldTypes = [
  {
    id: getUUID(),
    value: fieldType.TEXT,
    lable: "Text",
  },
  {
    id: getUUID(),
    value: fieldType.NUMBER,
    lable: "Number",
  },
  {
    id: getUUID(),
    value: fieldType.DATE,
    lable: "Date",
  },
  {
    id: getUUID(),
    value: fieldType.CHECKBOX,
    lable: "Checkbox",
  },
  {
    id: getUUID(),
    value: fieldType.REMOVE,
    lable: "Remove",
  },
];

export const newAddableFieldTypes = [...fieldTypes].splice(
  0,
  fieldTypes.length - 1
);

export const getCategoryDefaultDetails = () => {
  const categoryDefaultDetails = {
    id: getUUID(),
    categoryName: {
      lable: "Name",
      value: "New Category",
      componentId: componentsId.TEXT_INPUT,
      type: "text",
    },
    titleField: {
      lable: "Title Field",
      value: "Title",
      componentId: componentsId.DROPDOWN,
      list: [
        {
          id: getUUID(),
          lable: "Title",
          value: "title",
        },
      ],
      type: "dropdown",
    },
    attributes: {
      [getUUID()]: {
        value: "",
        type: fieldType.TEXT,
        dropdownText: "Text",
      },
    },
    attributeTypes: [],
  };

  return JSON.parse(JSON.stringify(categoryDefaultDetails));
};
