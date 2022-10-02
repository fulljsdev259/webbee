import { useState, useMemo } from 'react';
import Form from "react-bootstrap/Form";
import { debounce } from '../../../utils/formats';

interface FormInputTypes {
    value?: string;
    lable?: string;
    onChange?: (value: string) => void;
    type?: string
}

export const FormInput: React.FC<FormInputTypes> = ({
    value,
    lable,
    onChange = () => null,
    type = 'text'
}) => {

  const [newValue, setValue] = useState<any>(value);

  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  const debounceHandle = debounce(handleChange, 2000);

  return useMemo(() => (
    <>
      <Form.Label>{lable}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  ), [value]);
};
