import { useState } from 'react';




//pass input errors back to form

const useForm = (callback) => {
    const [values, setValues] = useState({
        Email: "",
        Password: ""
    });
    
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
        callback()
    }



    return {
        handleChange,
        handleSubmit,
        values
        
    }
}

export default useForm;