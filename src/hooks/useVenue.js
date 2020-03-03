import { useState } from 'react';

//pass input errors back to form

const useForm = (callback) => {

    const defaultProps =   {
        "name": "",
        "description": "",
        "phone": "",
        "city": "",
        "hyperlink": "",
        "address": "",
        "lat": "", 
        "lng": "",
        "profileurl": "",
        "actiontypes": [1,2],
        "venuetypes": [9,10],
        "musictypes": [],
        "cuisinetypes": [],
        "openclose": [{}, {}, {}, {}, {}, {}, {}]
    }
    const [values, setValues] = useState(defaultProps);
    //state for errors
    const [isSubmitting, setIsSubmitting]  = useState(false);
    const [success,setSucess] = useState(false);
    const [error,seterror] = useState(false)

   const handleChange = e => {
        const target = e.target
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleClear = () =>{
        setValues(defaultProps)
    }

    const handleSubmit = e => {
        e.preventDefault();
        //handle errors here 
        setIsSubmitting(true);
        callback(setSucess,seterror,setIsSubmitting);
        handleClear();
    }

    const handleLocation = place => {
        let city = place.formatted_address.split(',')[1]
        setValues({...values,lat:place.geometry.location.lat,lng:place.geometry.location.lng,city:city,address:place.formatted_address})
    }
    return {
        handleLocation,
        handleChange,
        handleSubmit,
        values,
        success,
        error,
        isSubmitting,
        setValues
    }
}

export default useForm;