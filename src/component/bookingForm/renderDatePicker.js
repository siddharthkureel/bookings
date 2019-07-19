import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns/esm";
import moment from "moment";
const renderDatePicker = ({ input,classNameInput, meta: { touched, error } }) => (
    <div>
        <DatePicker {...input}
         className={classNameInput}
         dateForm="MM/DD/YYYY" 
         selected={input.value ? moment(input.value).toDate() : null} 
         minDate={new Date()}
         maxDate={addDays(new Date(), 60)}
         placeholderText="Select a date between"
         />
        {touched && error && <span>{error}</span>}
    </div>
);

export default renderDatePicker;