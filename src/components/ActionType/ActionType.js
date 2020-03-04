import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../EventType/EventType.css";

const animatedComponents = makeAnimated();

export default function ActionType(props) {
  const [state, setState] = useState();

  const optionhashmapforreference = {
    "1": "Eat",
    "2": "Drink",
    "3": "Dance",
    "4": "Play",
    "5": "Explore",
    "6": "Watch",
    "7": "networking",
    "8": "Celebrate",
    "9": "Sign",
    "10": "Study"
  };

  const checkoption = option => {
    // let currentdata = [];
    // if (arr.length === 0) {
    //   setState([]);
    // } else {
    //   arr.forEach(id => {
    //     let data = {
    //       label: optionhashmapforreference[id],
    //       value: id
    //     };
    //     currentdata.push(data);
    //   });
    let data = {
      label: optionhashmapforreference[option],
      value: option
    };
    console.log(data);
    setState(data);
  };

  useEffect(() => {
    checkoption(props.value);
  }, []);

  const options = [
    {
      value: "1",
      label: "Eat"
    },
    {
      value: "2",
      label: "Drink"
    },
    {
      value: "3",
      label: "Dance"
    },
    {
      value: "4",
      label: "Play"
    },
    {
      value: "5",
      label: "Explore"
    },
    {
      value: "6",
      label: "Watch"
    },
    {
      value: "7",
      label: "Networking"
    },
    {
      value: "8",
      label: "Celebrate"
    },
    {
      value: "9",
      label: "Sing"
    },
    {
      value: "10",
      label: "Study"
    }
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
    console.log(event);
    switch (event.value) {
      case "1":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 1 } });
        break;
      case "2":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 2 } });
        break;
      case "3":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 3 } });
        break;
      case "4":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 4 } });
        break;
      case "5":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 5 } });
        break;
      case "6":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 6 } });
        break;
      case "7":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 7 } });
        break;
      case "8":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 8 } });
        break;
      case "9":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 9 } });
        break;
      case "9":
        setState(event);
        props.handleChange({ target: { name: "actionType", value: 10 } });
        break;
      default:
        props.handleChange({ target: { name: "actionType", value: 1 } });
        break;
    }
    // if (event !== null) {
    //   let res = [];
    //   await event.forEach(value => res.push(value.value));
    //   props.handleChange({
    //     target: {
    //       name: "ActionType",
    //       value: res
    //     }
    //   });
    //   setState(event);
    // } else {
    //   props.handleChange({
    //     target: {
    //       name: "ActionType",
    //       value: []
    //     }
    //   });
    //   setState([]);
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
