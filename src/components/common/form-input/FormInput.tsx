import { useMemo } from "react";
import Form from "react-bootstrap/Form";
import { getFormattedDate } from "../../../utils/formats";

interface FormInputTypes {
  value?: string;
  lable?: string;
  onChange?: (value: string) => void;
  type?: string;
}

export const FormInput: React.FC<FormInputTypes> = ({
  value = "",
  lable,
  onChange = () => null,
  type = "text",
}) => {

  const renderValue = useMemo(() => {
    let newValue = value;
    if (type === "text") {
      // finding out if string matches with a valid date format else the value itself
      newValue = getFormattedDate(value);
    } else {
      // if the type == text, and the privious attribute value was a flag, just converting a flag into number
      if (newValue !== "") {
        newValue = String(Number(value));
      }
    }
    return newValue;
  }, [value, type]);

  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return useMemo(
    () => (
      <>
        <Form.Label>{lable}</Form.Label>
        <Form.Control type={type} value={renderValue} onChange={handleChange} />
      </>
    ),
    [value]
  );
};
