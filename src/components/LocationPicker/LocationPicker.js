import React,{useState} from 'react';
import {getPlace,getPrediction} from './location-data';

export default function LocationPicker(props) {
    const [loading, setloading] = useState(false)
    const [predictions, setpredictions] = useState([]);
    const [address, setaddress] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setaddress(e.target.value)
        if(e.target.value.length < 2){
            setpredictions(null)
        }else{
            getPrediction(e.target.value).then(data=>{
                setpredictions(data.predictions)
            })
        }
    }

    const handleSelect = place => {
        setloading(true)
        getPlace(place).then(res=>{
            setaddress(res.formatted_address);
            setloading(false);
            if(props.select){
            props.select(res)
        }
        });
        setpredictions(null);
        
    }

    return (
        <div>
            <input className="form-control" type="text" name="address" onChange={handleChange} placeholder={props.address} readOnly={loading}/>
                {predictions && (
                <ul className="list-group zindex-popover">
                    {predictions.map(pred =>(
                        <li key={pred.id} className="list-group-item zindex-popover bg-dark" onClick={()=>{handleSelect(pred.place_id)}}>{pred.description}</li>
                        ))}
                
                </ul>)}
        </div>
    )   
}
