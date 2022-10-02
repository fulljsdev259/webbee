import React, { useCallback, useState } from "react";
import Card from "react-bootstrap/Card";
import { InputDropdown } from "../common/input-dropdown";
import { Select } from "../common/select";
import { Divider } from "../common/divider";
import { CustomDropdown } from "../common/dropdown";
import { FormInput } from "../common/form-input";
import { fieldType, newAddableFieldTypes } from "../../services/static-data";
import { useDispatch } from "react-redux";
import { reduxConstants } from "../../redux/constants";
import { debounce } from "../../utils/formats";
import { Checkbox } from "../common/checkbox";
import { CustomDatePicker } from "../common/datepicker";

interface CategoryItemTypes {
  details?: any;
//   attributeTypes?: Array<string>;
  deleteItem?: () => void;
  onValueChange?: (id: string, value: any) => void;
  value?: any;
  typeDetails?: any,
  values?: any
}

export const CategoryItem: React.FC<CategoryItemTypes> = ({
  details = {},
  deleteItem = () => null,
  onValueChange = () => null,
  value,
  values = {}
}) => {
  console.log(details, "details");

  const getComponent = (item: any) => {

    switch (item.type) {
      case fieldType.TEXT:
        return (
          <FormInput
            value={values[item.id]}
            lable={item.value}
            type={item.type}
            onChange={(value: string) => onValueChange(item.id, value)}
          />
        );
      case fieldType.NUMBER:
        return (
          <FormInput
          value={values[item.id]}
            lable={item.value}
            type={item.type}
            onChange={(value: string) => onValueChange(item.id, value)}
          />
        );
      case fieldType.CHECKBOX:
        return (
          <Checkbox
            onChange={(value: string) => onValueChange(item.id, !value)}
            value={values?.[item.id] ? true : false}
            label={item.value}
          />
        );

      case fieldType.DATE:
        return <CustomDatePicker />;
      default:
        break;
    }
  };

  return (
    <Card>
      <Card.Header>
        <div>{"categoryNewName"}</div>
        <div onClick={deleteItem}>delete</div>
      </Card.Header>
      <Card.Body>
        {
            Object.keys(details).map((key) => {
                return getComponent({ ...details[key], id: key })
            })
        }

        <Divider />
      </Card.Body>
    </Card>
  );
};
