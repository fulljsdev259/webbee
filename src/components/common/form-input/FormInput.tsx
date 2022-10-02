import { useMemo } from 'react';
import Form from "react-bootstrap/Form";

interface FormInputTypes {
    value?: string;
    lable?: string;
    onChange?: (value: string) => void;
    type?: string
}

export const FormInput: React.FC<FormInputTypes> = ({
    value = '',
    lable,
    onChange = () => null,
    type = 'text'
}) => {

  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return useMemo(() => (
    <>
      <Form.Label >{lable}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        onChange={handleChange}
      />
    </>
  ), [value]);
};
