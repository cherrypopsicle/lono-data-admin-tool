import React, { useState } from 'react';
import SingleDayandHour from './SingleDayandHour'

function HoursofOperation() {

    const [days, setdays] = useState([{},{},{},{},{},{},{}])
    

    const handleChange = (e, name) => {
        console.log(days)
        switch (name) {
            case "Monday":
                if(e === null){
                    console.log(e)
                    let x = days;
                    x[0]={};
                    setdays(x)
                }else{
                    if(e.target === "Open"){
                    let x = days;
                    x[0]={...days[0],"Open":e.value}
                    setdays(x)
                    }   
                    else if(e.target === "Close"){
                    let x = days;
                    x[0]={...days[0],"Close":e.value}
                    setdays(x)                
                    }
                }
                break;
            case "Tuesday":
                if(e.target === "Open"){
                    let x = days;
                    x[1]={...days[1],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[1]={...days[1],"Close":e.value}
                        setdays(x)                    
                    }
                break;
            case "Wednesday":
                if(e.target === "Open"){
                    let x = days;
                    x[2]={...days[2],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[2]={...days[2],"Close":e.value}
                        setdays(x)                    
                    }
                break;
            case "Thrusday":
                if(e.target === "Open"){
                    let x = days;
                    x[3]={...days[3],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[3]={...days[3],"Close":e.value}
                        setdays(x)                    
                    }
                break;
            case "Friday":
                if(e.target === "Open"){
                    let x = days;
                    x[4]={...days[4],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[4]={...days[4],"Close":e.value}
                        setdays(x)                    
                    }
                break;
            case "Saturday":
                if(e.target === "Open"){
                    let x = days;
                    x[5]={...days[5],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[5]={...days[5],"Close":e.value}
                        setdays(x)                    
                    }
                break;
            case "Sunday":
                if(e.target === "Open"){
                    let x = days;
                    x[6]={...days[6],"Open":e.value}
                    setdays(x)                    
                }
                    else{
                        let x = days;
                        x[6]={...days[6],"Close":e.value}
                        setdays(x)                    
                    }
                break;

            default:
                break;
        }
    }
    return (
        <React.Fragment>
            <SingleDayandHour name="Monday" handleChange={handleChange} />
            <SingleDayandHour name="Tuesday" handleChange={handleChange} />
            <SingleDayandHour name="Wednesday" handleChange={handleChange} />
            <SingleDayandHour name="Thrusday" handleChange={handleChange} />
            <SingleDayandHour name="Friday" handleChange={handleChange} />
            <SingleDayandHour name="Saturday" handleChange={handleChange} />
            <SingleDayandHour name="Sunday" handleChange={handleChange} />
        </React.Fragment>
    )
}

export default HoursofOperation
