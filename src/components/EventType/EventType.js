import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './EventType.css'


const animatedComponents = makeAnimated();

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

    const checkoption = (arr) => {
        let currentdata = [];
        if (arr.length === 0) {
            setState([])
        } else {
            arr.forEach((id) => {
                let data = {
                    label: optionhashmapforreference[id],
                    value: id
                };
                currentdata.push(data)
            })

            setState(currentdata)
        }    }

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
      }

    const handleChange = async(event) => {
        console.log(event)
        if(event !== null){
            let res = []
        await event.forEach(value => res.push(value.value))
        props.handleChange({target:{name:"EventType",value:res}});
        setState(event)
        }else{
            props.handleChange({target:{name:"EventType",value:[]}})
            setState([])
        }
    }
    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                styles={customStyles}
                components={animatedComponents}
                defaultValue={props.value}
                isMulti
                options={options}
                onChange={handleChange}
                value={state}
            />
        </div>
    )
}
