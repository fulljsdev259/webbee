import { useMemo, useRef } from "react";
import DatePicker from "react-datepicker";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "react-datepicker/dist/react-datepicker.css";
import { isValidDate } from "../../../utils/formats";
import moment from "moment";

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
      // convert Moment instance to normal new Date instance, as Moment instance does not work with react-datepicker
      date = moment(date).toDate();
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
