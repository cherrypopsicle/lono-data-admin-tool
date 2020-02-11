import React,{useState} from 'react';
import'./TimePicker.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { subDays, addDays } from 'date-fns'


export default function TimePicker(props) {

    const [startDate, setStartDate] = useState(new Date());

    const handleChange = date => { 
        let dateConverted = new Date(date).toISOString()
         setStartDate(date);
         props.handleChange({target:{name:props.name,value:dateConverted}}) 
        }
    
    
    return (
            <div className="form-group">
                <div className='input-group date' id='datetimepicker1'>
                    <DatePicker
                        className="form-control"
                        selected={null}
                        onChange={handleChange}
                        showTimeSelect
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 365)}
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa" 
                        placeholderText={props.placeholder}/>
                </div>
            </div>

    );
};

