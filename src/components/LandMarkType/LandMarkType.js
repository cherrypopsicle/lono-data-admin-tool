import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import '../EventType/EventType.css'

export default function LandMarkType(props) {
    const [state, setState] = useState();

    
    const optionhashmapforreference = {
        "1":"Park",
        "2":"Sightseeing",
        "3":"Lake",
        "4":"Architechture",
        "5":"Musuems",
        "6":"Cultural",
        "7":"ThemePark",
        "8":"ReligiousSite",
        "9":"Garden"
    }

    const checkoption = (id) => {
        setState({label:optionhashmapforreference[id],value:id})
    }

    useEffect(() => {
        checkoption(props.value);
    },[])


    const options = [
        {value: "1", label: "Park"}
        , { value: "2", label: "Sightseeing" }
        , { value: "3", label: "Lake" }
        , { value: "4", label: "Architechture" }
        , { value: "5", label: "Musuems" }
        , { value: "6", label: "Cultural" }
        , { value: "7", label: "ThemePark" }
        , { value: "8", label: "ReligiousSite" }
        , { value: "9", label: "Garden" }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
          }),
        //   control: () => ({
        //     // none of react-select's styles are passed to <Control />
        //     width: 200,
        //   }),
        //   singleValue: (provided, state) => {
        //     const opacity = state.isDisabled ? 0.5 : 1;
        //     const transition = 'opacity 300ms';
        
        //     return { ...provided, opacity, transition };
        //   }
      }

    const handleChange = (event) => {
        console.log(event.value)
        switch (event.value) {
            case "1":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 1 } });
                break;
            case "2":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 2 } });
                break;
            case "3":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 3 } });
                break;
            case "4":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 4 } });
                break;
            case "5":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 5 } });
                break;
            case "6":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 6 } });
                break;
            case "7":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 7 } });
                break;
            case "8":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 8 } });
                break;
            case "9":
                setState(event);
                props.handleChange({ target: { name: "landmarkType", value: 9 } });
                break;
            default:
                props.handleChange({ target: { name: "landmarkType", value: 1 } });
                break;
        }
    }
    return (
        <div>
            <Select options={options} styles={customStyles} onChange={handleChange} value={state} />
        </div>
    )
}
