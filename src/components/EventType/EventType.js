import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import './EventType.css'

export default function EventType(props) {
    const [state, setState] = useState();

    
    const optionhashmapforreference = {
        "1": "Lono",
        "2": "User",
        "3": "Venue",
        "4":"Festival",
        "5": "Physical Activity",
        "6": "Family",
        "7": "Sport",
        "8": "Food",
        "9": "Art",
        "10": "Cultural",
        "11": "Holiday",
        "12": "Film",
        "13": "Networking",
        "14": "Adult Only",
        "15": "Concert",
        "16": "Night Life",
        "17": "Entertainment",
        "18": "Music",
        "19": "Physical",
    }

    const checkoption = (id) => {
        setState({label:optionhashmapforreference[id],value:id})
    }

    useEffect(() => {
        checkoption(props.value);
    },[])


    const options = [{
        value: "1", label: "Lono"
    }, { value: "2", label: "User" }, { value: "3", label: "Venue" }, { value: "4", label: "Festival" }
        , { value: "5", label: "Physical Activity" }
        , { value: "6", label: "Family" }
        , { value: "7", label: "Sport" }
        , { value: "8", label: "Food" }
        , { value: "9", label: "Art" }
        , { value: "10", label: "Cultural" }
        , { value: "11", label: "Holiday" }
        , { value: "12", label: "Film" }
        , { value: "13", label: "Networking" }
        , { value: "14", label: "Adults Only" }
        , { value: "15", label: "Concert" }
        , { value: "16", label: "Night Life" }
        , { value: "17", label: "Entertainment" }
        , { value: "18", label: "Music" }
        , { value: "19", label: "Physical" }
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
                props.handleChange({ target: { name: "EventType", value: [1] } });
                break;
            case "2":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [2] } });
                break;
            case "3":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [3] } });
                break;
            case "4":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [4] } });
                break;
            case "5":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [5] } });
                break;
            case "6":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [6] } });
                break;
            case "7":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [7] } });
                break;
            case "8":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [8] } });
                break;
            case "9":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [9] } });
                break;
            case "10":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [10] } });
                break;
            case "11":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [11] } });
                break;
            case "12":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [12] } });
                break;
            case "13":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [13] } });
                break;
            case "14":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [14] } });
                break;
            case "15":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [15] } });
                break;
            case "16":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [16] } });
                break;
            case "17":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [17] } });
                break;
            case "18":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [18] } });
                break;
            case "19":
                setState(event);
                props.handleChange({ target: { name: "EventType", value: [19] } });
                break;

            default:
                props.handleChange({ target: { name: "EventType", value: [1] } });
                break;
        }
    }
    return (
        <div>
            <Select options={options} styles={customStyles} onChange={handleChange} value={state} />
        </div>
    )
}
