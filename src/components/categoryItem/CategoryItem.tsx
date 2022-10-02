import React, { useCallback, useMemo } from "react";
import Card from "react-bootstrap/Card";
import { FormInput } from "../common/form-input";
import { fieldType } from "../../services/static-data";
import { Checkbox } from "../common/checkbox";
import { CustomDatePicker } from "../common/datepicker";
import { isValidDate } from "../../utils/formats";

interface CategoryItemTypes {
  details?: any;
  deleteItem?: () => void;
  onValueChange?: (id: string, value: any) => void;
  typeDetails?: any;
  values?: any;
  titleFieldName?: string;
}

export const CategoryItem: React.FC<CategoryItemTypes> = ({
  details = {},
  deleteItem = () => null,
  onValueChange = () => null,
  values = {},
  titleFieldName = "",
}) => {
  const getComponent = (item: any) => {
    switch (item.type) {
      case fieldType.TEXT:
        return (
          <>
            <div className="mt-3" />
            <FormInput
              value={values[item.id]}
              key={item.id}
              lable={item.value}
              type={item.type}
              onChange={(value: string) => onValueChange(item.id, value)}
            />
          </>
        );
      case fieldType.NUMBER:
        return (
          <>
            <div className="mt-3" />
            <FormInput
              value={values[item.id]}
              key={item.id}
              lable={item.value}
              type={item.type}
              onChange={(value: string) => onValueChange(item.id, value)}
            />
          </>
        );
      case fieldType.CHECKBOX:
        return (
          <Checkbox
            onChange={(value: string) => onValueChange(item.id, !value)}
            value={!!values[item.id]}
            label={item.value}
            key={item.id}
          />
        );

      case fieldType.DATE:
        return (
          <CustomDatePicker
            value={values[item.id]}
            key={item.id}
            label={item.value}
            onChange={(value: any) => onValueChange(item.id, value)}
          />
        );
      default:
        break;
    }
  };

  // get current title even if user is typing
  const renderCardTitle = useCallback(() => {
    let title: any, defaultKey: string = '';
    const keys = Object.keys(values);

    if (keys.length) {
      for (let key in details) {
        if(!defaultKey) { defaultKey = key }
        const value = details[key];
        if (value.value == titleFieldName) {
          console.log(value.type, 'value.typevalue.type');
          
          if (value.type === fieldType.DATE) {

            // check if user has changed any attribute to date, then the value will not be applicable to date instance
            title = isValidDate(values[key]) ? new Date(values[key]).toLocaleDateString() : '';
          } else if (value.type === fieldType.CHECKBOX) {

            // check if user has changed any attribute to checkbox: boolean
            title = !!values[key]
          } else if (value.type === fieldType.NUMBER) { 

            // check if user has changed any attribute to number, text of any will not be apply to text field then showing the header as empty and let the user type the number
            title = isNaN(Number(values[key])) ? '' : values[key]
          } else {
            title = values[key];
          }
        } 
      }
      // if no attribute was selected as a title or not defined any attribute as Title then, considering the first attribute by default
      title = title ?? values[defaultKey]
    }
    // show Title by default
     title = title ?? 'Title'
    return String(title);
  }, [values, details, titleFieldName]);  

  
  return (
    <Card>
      <Card.Header className="card-header-item">
        <div>{renderCardTitle()}</div>
        <i onClick={deleteItem} className="fa fa-trash-o"></i>
      </Card.Header>
      <Card.Body>
        {Object.keys(details).map((key) => {
          return (
            <React.Fragment key={key}>
              {getComponent({ ...details[key], id: key })}{" "}
            </React.Fragment>
          );
        })}
      </Card.Body>
    </Card>
  );
};
