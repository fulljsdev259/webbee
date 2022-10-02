import React, { useCallback, useState } from "react";
import Card from "react-bootstrap/Card";
import { InputDropdown } from "../common/input-dropdown";
import { Select } from "../common/select";
import { Divider } from "../common/divider";
import { CustomDropdown } from "../common/dropdown";
import { FormInput } from "../common/form-input";
import { newAddableFieldTypes } from "../../services/static-data";
import { useDispatch } from "react-redux";
import { reduxConstants } from "../../redux/constants";

interface CategoryTypes {
  index?: number;
  details?: any;
}

export const Category: React.FC<CategoryTypes> = ({ details = {} }) => {
  const dispatch = useDispatch();
  const { categoryName, titleField, attributes } = details;

  const deleteCategory = useCallback(() => {
    dispatch({
      type: reduxConstants.DELETE_CATEGORY,
      payload: { id: details.id },
    });
  }, [details]);

  const addAttribute = (data: any) => {
    dispatch({
      type: reduxConstants.ADD_ATTRIBUTE_TO_CATEGORY,
      payload: {
        id: details.id,
        data: { type: data.value, value: "", dropdownText: data.lable },
      },
    });
  };

  const onAttributeChange = useCallback(
    (attributeId: string, data: any) => {
      dispatch({
        type: reduxConstants.CATEGORY_ATTRIBUTE_CHANGE,
        payload: {
          attributeId,
          categoryId: details.id,
          data: { ...attributes[attributeId], ...data },
        },
      });
    },
    [attributes]
  );

  const onAttributeTypeChange = useCallback(
    (attributeId: string, data: any) => {
      onAttributeChange(attributeId, {
        type: data.value,
        dropdownText: data.lable,
      });
    },
    [attributes, onAttributeChange]
  );

  const onAttributeValueChange = useCallback(
    (attributeId: string, value: string) => {
      onAttributeChange(attributeId, { value });
    },
    [attributes, onAttributeChange]
  );

  const handleTitleFiled = useCallback(
    (value: string) => {
      dispatch({
        type: reduxConstants.UPDATE_CAGEGORY_TITLE_FIELD,
        payload: {
          categoryId: details.id,
          value,
        },
      });
    },
    [details]
  );

  const handleCategoryName = useCallback(
    (value: string) => {
      dispatch({
        type: reduxConstants.UPDATE_CAGEGORY_NAME,
        payload: {
          categoryId: details.id,
          value,
        },
      });
    },
    [details]
  );

  return (
    <Card>
      <Card.Header>
        <div>{categoryName.value}</div>
        <div onClick={deleteCategory}>delete</div>
      </Card.Header>
      <Card.Body>
        <FormInput
          value={categoryName.value}
          lable={categoryName.lable}
          onChange={handleCategoryName}
        />
        <Select
          value={titleField.value}
          lable={titleField.lable}
          onChange={handleTitleFiled}
          list={titleField.list}
        />
        <Divider />
        {Object.keys(attributes).map((key) => {
          return (
            <InputDropdown
              attribute={attributes[key]}
              key={key}
              variant="secondary"
              onAttributeTypeChange={(item) => onAttributeTypeChange(key, item)}
              onAttributeValueChange={(value) =>
                onAttributeValueChange(key, value)
              }
            />
          );
        })}
      </Card.Body>
      <Card.Footer>
        <CustomDropdown onChange={addAttribute} items={newAddableFieldTypes} />
      </Card.Footer>
    </Card>
  );
};
