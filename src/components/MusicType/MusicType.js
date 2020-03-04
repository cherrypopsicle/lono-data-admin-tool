import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../EventType/EventType.css";

const animatedComponents = makeAnimated();

export default function MusicType(props) {
  const [state, setState] = useState();

  const optionhashmapforreference = {
    "1": "ElectronicDance",
    "2": "Rock",
    "3": "Jazz",
    "4": "Dubstep",
    "5": "RNB",
    "6": "CountryMusic",
    "7": "Electro",
    "8": "IndieRock",
    "18": "HipHop",
    "19": "Pop",
    "20": "International",
    "21": "Classical",
    "22": "Festive",
    "23": "Era/70's/80's",
    "24": "Live Music"
  };

  const checkoption = id => {
    setState([{ label: optionhashmapforreference[id], value: id }]);
  };

  useEffect(() => {
    checkoption(props.value);
  }, []);

  const options = [
    { value: "1", label: "ElectronicDance" },
    { value: "2", label: "Rock" },
    { value: "3", label: "Jazz" },
    { value: "4", label: "Dubstep" },
    { value: "5", label: "RNB" },
    { value: "6", label: "CountryMusic" },
    { value: "7", label: "Electro" },
    { value: "8", label: "IndieRock" },
    { value: "18", label: "HipHop" },
    { value: "19", label: "Pop" },
    { value: "20", label: "International" },
    { value: "21", label: "Classical" },
    { value: "22", label: "Festive" },
    { value: "23", label: "Era/70's/80's" },
    { value: "24", label: "Live Music" }
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20
    })
  };

  const handleChange = async event => {
    switch (event.value) {
      case "1":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 1 } });
        break;
      case "2":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 2 } });
        break;
      case "3":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 3 } });
        break;
      case "4":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 4 } });
        break;
      case "5":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 5 } });
        break;
      case "6":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 6 } });
        break;
      case "7":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 7 } });
        break;
      case "8":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 8 } });
        break;
      case "18":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 18 } });
        break;
      case "19":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 19 } });
        break;
      case "20":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 20 } });
        break;
      case "21":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 21 } });
        break;
      case "22":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 22 } });
        break;
      case "23":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 23 } });
        break;
      case "24":
        setState(event);
        props.handleChange({ target: { name: "musicType", value: 24 } });
        break;
      default:
        props.handleChange({ target: { name: "musicType", value: 1 } });
        break;
    }
    // console.log(event)
    // if(event !== null){
    //     let res = []
    // await event.forEach(value => res.push(value.value))
    // props.handleChange({target:{name:"musictypes",value:res}});
    // setState(event)
    // }else{
    //     props.handleChange({target:{name:"musictypes",value:[]}})
    //     setState([])
    // }
  };
  return (
    <div>
      <Select
        // closeMenuOnSelect={false}
        styles={customStyles}
        // components={animatedComponents}
        // defaultValue={props.value}
        // isMulti
        options={options}
        onChange={handleChange}
        value={state}
      />
    </div>
  );
}
