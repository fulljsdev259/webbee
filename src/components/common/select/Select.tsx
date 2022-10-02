import React from "react";
import Form from "react-bootstrap/Form";

interface SelectTypes {
    value?: string;
    lable?: string;
    onChange?: (value: string) => void,
    list?: Array<any>
}

export const Select: React.FC<SelectTypes> = ({
    value = '',
    lable = '',
    onChange = () => null,
    list = []
}) => {
  return (
    <>
        <Form.Label className="mt-3" htmlFor="inputPassword5">{lable}</Form.Label>
        <Form.Select onChange={(e) => onChange(e.target.value)} value={value} aria-label="Default select example">
            {list?.map((item) => {
                return (
                    <option key={item.id} value={item.value}>{item.lable}</option>
                )
            })}
        </Form.Select>
    </>
  );
};
