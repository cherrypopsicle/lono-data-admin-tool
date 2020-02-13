import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import '../EventType/EventType.css'

export default function FrequencyType(props) {
    const [state, setState] = useState();

    
    const optionhashmapforreference = {
        "0":"Daily",
        "1":"Weekly",
        "2":"Monthly",
        "3":"Once"
    }

    const checkoption = (id) => {
        setState({label:optionhashmapforreference[id],value:id})
    }

    useEffect(() => {
        checkoption(props.value);
    },[])


    const options = [
        {value: "0", label: "Daily"}
        , { value: "1", label: "Weekly" }
        , { value: "2", label: "Monthly" },
        { value: "3", label: "Once" }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
          }),
      }

    const handleChange = (event) => {
        console.log(event.value)
        switch (event.value) {
            case "0":
                setState(event);
                props.handleChange({ target: { name: "frequencyType", value: 0 } });
                break;
            case "1":
                setState(event);
                props.handleChange({ target: { name: "frequencyType", value: 1 } });
                break;
            case "2":
                setState(event);
                props.handleChange({ target: { name: "frequencyType", value: 2 } });
                break;
            case "3":
                setState(event);
                props.handleChange({ target: { name: "frequencyType", value: 3 } });
                break;
            default:
                props.handleChange({ target: { name: "frequencyType", value: 1 } });
                break;
        }
    }
    return (
        <div>
            <Select options={options} styles={customStyles} onChange={handleChange} value={state} />
        </div>
    )
}
