import React, { useState } from 'react'
import './singleDayandHour.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


function SingleDayandHour(props) {
    const [reservation, setreservation] = useState(false);
    const [startDate, setStartDate] = useState(new Date("2020-02-12T05:00:00.481Z"));
    const [endDate, setEndDate] = useState(startDate);



    const handleCheck = () => {
        setreservation(!reservation)
        if(reservation){
            console.log('here')
            props.handleChange(null, props.name);
        }
    }


    return (
        <React.Fragment>
            <div className="day-time-container">
                <label className="day-time-label" htmlFor="reservation">{props.name || "Today"}</label>
                <span className='day-time-switch-container'>
                    <span className={reservation ? "green" : "red"}>{reservation ? "Open" : "Closed"}</span>
                    <label className="switch" id="event-reservation-switch">
                        <input type="checkbox" onChange={handleCheck} name="reservation" defaultChecked={reservation} />
                        <span className="slider round"></span>
                    </label>
                </span>
            </div>
            {reservation && (<div className="day-start-end">
                <div className="date-container">
                    <DatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={date => { setStartDate(date); props.handleChange({ target: "Open", value: date }, props.name) }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>

                <div className="date-container">
                    <DatePicker
                        className="form-control"
                        selected={endDate}
                        onChange={date => { setEndDate(date); props.handleChange({ target: "Close", value: date }, props.name) }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>
            </div>)}

        </React.Fragment>
    );
}

export default SingleDayandHour
