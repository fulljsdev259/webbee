import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


interface DatePickerTypes {

}

export const CustomDatePicker: React.FC<DatePickerTypes> = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

    )
}