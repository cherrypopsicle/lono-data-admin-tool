import { useState } from 'react';

//pass input errors back to form

const useForm = (callback, props = null) => {

    const defaultProps = {
        "name": props ? props.name : "",
        "description": props ? props.description : "",
        "photourl": props ? props.photourl : "",
        "lat": props ? props.lat : "",
        "lng": props ? props.lng : "",
        "Hyperlink": props ? props.Hyperlink : "",
        "address": props ? props.address : "",
        "city": props ? props.city : "",
        "landmarkType": props ? props.landmarkType : 1
    }
    const [values, setValues] = useState(defaultProps);
    //state for errors
    const [isSubmitting, setIsSubmitting]  = useState(false);
    const [success,setSucess] = useState(false);
    const [error,seterror] = useState(false)

   const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        setSucess(false)
        seterror(false)
         console.log(values);
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
        isSubmitting
    }
}

export default useForm;