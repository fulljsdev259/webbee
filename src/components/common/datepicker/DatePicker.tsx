import { useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "react-datepicker/dist/react-datepicker.css";
import { isValidDate } from "../../../utils/formats";

interface DatePickerTypes {
  value?: any;
  label?: string;
  onChange?: (date: Date) => void;
}

export const CustomDatePicker: React.FC<DatePickerTypes> = ({
  value,
  label = "",
  onChange = () => null,
}) => {
  const datePickerRef = useRef<DatePicker>(null);

  // handle the case if user changed attribute type from any to date
  const renderValue = useMemo(() => {
    let date = value;

    if (isValidDate(date)) {
      date = new Date(date);
    } else {
      date = null;
    }
    return date;
  }, [value]);

  return (
    <>
      <Form.Label className="mt-3">{label}</Form.Label>
      <Card className="mb-3">
        <Card.Body className="date-picker-body">
          <DatePicker
            ref={datePickerRef}
            selected={renderValue}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
          />
          <i
            onClick={() => datePickerRef.current?.setOpen(true)}
            className="fa fa-calendar"
          ></i>
        </Card.Body>
      </Card>
    </>
  );
};
