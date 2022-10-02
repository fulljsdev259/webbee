import React, { useCallback, useMemo } from "react";
import Card from "react-bootstrap/Card";
import { FormInput } from "../common/form-input";
import { fieldType } from "../../services/static-data";
import { Checkbox } from "../common/checkbox";
import { CustomDatePicker } from "../common/datepicker";

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
            value={values?.[item.id] ? true : false}
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

  const renderCardTitle = useCallback(() => {
    let title = "Title";
    const keys = Object.keys(values);
    if (keys.length) {
      for (let key in details) {
        const value = details[key];
        if (value.value == titleFieldName) {
          if (value.type === fieldType.DATE) {
            return new Date(values[key]).toLocaleDateString();
          } else if (typeof values[key] === 'boolean') {
            return String(values[key])
          } else {
            return values[key];
          }
        }
      }
    }
    return title;
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
