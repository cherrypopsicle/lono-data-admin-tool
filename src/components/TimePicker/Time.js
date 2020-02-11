import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import { addDays,parseISO } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

export default function Time(props) {
    const handleChange = date => { props.handleChange({target:{name:props.name,value:new Date(date).toISOString()}});setStartDate(date) }
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        className="form-control"
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        minDate={(props.startval)? props.startval:new Date()}
        maxDate={addDays(parseISO(new Date()), 365)}
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa" />

    );
};

