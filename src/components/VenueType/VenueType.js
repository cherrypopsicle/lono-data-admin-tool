import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../EventType/EventType.css'


const animatedComponents = makeAnimated();

export default function VenueType(props) {
    const [state, setState] = useState({});

    
    const optionhashmapforreference = {
        '9': 'Bar',
        '10': 'Restaurant',
        '11': 'Cafe',
        '12': 'Club',
        '13': 'Festival',
        '20': 'Office',
        '21': 'Yelp'
      }

    const checkoption = (type) => {
        // let currentdata = [];
        // if(arr.length === 0){
        //     setState([])
        // }else{
        //     arr.forEach((id)=>{
        //         let data = {label:optionhashmapforreference[id],value:id};
        //         currentdata.push(data)
        //     })

        //     setState(currentdata)
        // }
        let data = {
            label: optionhashmapforreference[type],
            value: type
        }
        setState(data);
    }

    useEffect(() => {
        checkoption(props.value);
    },[])


    const options = [
        {value: "9", label: "Bar"}
        , { value: "10", label: "Restaurant" }
        , { value: "11", label: "Cafe" }
        , { value: "12", label: "Club" }
        , { value: "13", label: "Festival" }
        , { value: "20", label: "Office" }
        , { value: "21", label: "Yelp" }
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
        console.log(event);
        switch (event.value) {
            case "9":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 9 } });
              break;
            case "10":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 10 } });
              break;
            case "11":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 11 } });
              break;
            case "12":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 12 } });
              break;
            case "13":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 13 } });
              break;
            case "20":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 20 } });
              break;
            case "21":
              setState(event);
              props.handleChange({ target: { name: "venueType", value: 21 } });
              break;
          }
        // if(event !== null){
        //     let res = []
        // await event.forEach(value => res.push(value.value))
        // props.handleChange({target:{name:"venuetypes",value:res}});
        // setState(event)
        // }else{
        //     props.handleChange({target:{name:"venuetypes",value:[]}})
        //     setState([])
        // }
    }
    return (
        <div>
            <Select
                // closeMenuOnSelect={false}
                styles={customStyles}
                // components={animatedComponents}
                // defaultValue={state}
                // isMulti
                options={options}
                onChange={handleChange}
                value={state}
            />
        </div>
    )
}
