import { useState, useEffect } from 'react';

//pass input errors back to form

const useForm = (callback) => {
    const [values, setValues] = useState({
    name: "",
    description: "",
    photourl: "",
    lat: 0,
    lng: 0,
    Hyperlink: "",
    address: "",
    city: "",
    landmarkType: 0
    });
    //state for errors
    const [errors] = useState({});
    const [isSubmitting, setIsSubmitting]  = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //handle errors here 
        setIsSubmitting(true);
        callback();
    }

    const handleLocation = place => {
        let city = place.formatted_address.split(',')[1]
        setValues({...values,lat:place.geometry.location.lat,lng:place.geometry.location.lng,city:city,address:place.formatted_address})
    }

    //check to see if no errors, if none, call callback
useEffect(() => {
if(Object.keys(errors).length === 0 && isSubmitting){
    callback();
}

},[errors])

    return {
        handleLocation,
        handleChange,
        handleSubmit,
        values
        
    }
}

export default useForm;