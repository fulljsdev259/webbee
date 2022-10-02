import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { CustomDropdown } from "../dropdown";
import { fieldTypes } from "../../../services/static-data";

interface InputDropdownTypes {
  variant?: string;
  attribute?: any;
  onAttributeTypeChange?: (attributeId: string) => void;
  onAttributeValueChange?: (value: string) => void;
}

export const InputDropdown: React.FC<InputDropdownTypes> = ({
  attribute,
  onAttributeTypeChange = () => null,
  onAttributeValueChange = () => null,
  ...restProps
}) => {

  const handleChange = (event: any) => {
    onAttributeValueChange(event.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={attribute.value}
        onChange={handleChange}
        aria-label="Text input with dropdown button"
      />
      <CustomDropdown
        variant={restProps.variant}
        items={fieldTypes}
        title={attribute.dropdownText}
        onChange={onAttributeTypeChange}
      />
    </InputGroup>
  );
};
