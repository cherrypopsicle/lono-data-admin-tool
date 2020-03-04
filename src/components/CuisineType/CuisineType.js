import React, {
    useState,
    useEffect
} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../EventType/EventType.css'


const animatedComponents = makeAnimated();

export default function CuisineType(props) {
    const [state, setState] = useState({});
    /**
     *         American = 1,
            British = 2,
            Carribean = 3,
            Chinese = 4,
            French = 5,
            Greek = 6,
            Italian = 7,
            Indian = 8,
            Japanese = 9,
            Mexican = 10,
            MiddleEastern = 11,
            Thai = 12,
            Vietnamese = 13,
            Spanish = 14,
            Seafood = 15,
            Portuguese = 16,
            Halal = 17,
            Vegetarian = 18,
            Vegan = 19,
            Kosher = 20,
            IceCream = 21,
            Pastries = 22,
            Breakfast = 23,
            Brunch = 24,
            Lunch = 25,
            Dinner = 26,
            LateNight = 27,
            SupperClub = 28,
            Dessert = 29
     */

    const optionhashmapforreference = {
        '1': 'American',
        '2': 'British',
        '3': 'Carribean',
        '4': 'Chinese',
        '5': 'French',
        '6': 'Greek',
        '7': 'Italian',
        '8': 'Indian',
        '9': 'Japanese',
        '10': 'Mexican',
        '11': 'Middle Eastern',
        '12': 'Thai',
        '13': 'Vietnamese',
        '14': 'Spanish',
        '15': 'Seafood',
        '16': 'Portugese',
        '17': 'Halal',
        '18': 'Vegetarian',
        '19': 'Vegan',
        '20': 'Kosher',
        '21': 'Ice Cream',
        '22': 'Pastries',
        '23': 'Breakfast',
        '24': 'Brunch',
        '25': 'Lunch',
        '26': 'Dinner',
        '27': 'Late Night',
        '28': 'SupperClub',
        '29': 'Dessert'
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
    }, [])


    const options = [{
            value: "1",
            label: optionhashmapforreference['1']
        }, {
            value: "2",
            label: optionhashmapforreference['2']
        }, {
            value: "3",
            label: optionhashmapforreference['3']
        }, {
            value: "4",
            label: optionhashmapforreference['4']
        }, {
            value: "5",
            label: optionhashmapforreference['5']
        }, {
            value: "6",
            label: optionhashmapforreference['6']
        }, {
            value: "7",
            label: optionhashmapforreference['7']
        },
        {
            value: "8",
            label: optionhashmapforreference['8']
        }, {
            value: "9",
            label: optionhashmapforreference['9']
        }, {
            value: "10",
            label: optionhashmapforreference['10']
        }, {
            value: "11",
            label: optionhashmapforreference['11']
        }, {
            value: "12",
            label: optionhashmapforreference['12']
        }, {
            value: "13",
            label: optionhashmapforreference['13']
        }, {
            value: "14",
            label: optionhashmapforreference['14']
        },
        {
            value: "15",
            label: optionhashmapforreference['15']
        }, {
            value: "16",
            label: optionhashmapforreference['16']
        }, {
            value: "17",
            label: optionhashmapforreference['17']
        }, {
            value: "18",
            label: optionhashmapforreference['18']
        }, {
            value: "19",
            label: optionhashmapforreference['19']
        }, {
            value: "20",
            label: optionhashmapforreference['20']
        }, {
            value: "21",
            label: optionhashmapforreference['21']
        },
        {
            value: "22",
            label: optionhashmapforreference['22']
        }, {
            value: "23",
            label: optionhashmapforreference['23']
        }, {
            value: "24",
            label: optionhashmapforreference['24']
        }, {
            value: "25",
            label: optionhashmapforreference['25']
        }, {
            value: "26",
            label: optionhashmapforreference['26']
        }, {
            value: "27",
            label: optionhashmapforreference['27']
        }, {
            value: "28",
            label: optionhashmapforreference['28']
        }, {
            value: "29",
            label: optionhashmapforreference['29']
        },
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
        }),
    }

    const handleChange = async (event) => {
        console.log(event);
        switch (event.value) {
            case "1":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 1
                    }
                });
                break;
            case "2":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 2
                    }
                });
                break;
            case "3":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 3
                    }
                });
                break;
            case "4":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 5
                    }
                });
                break;
            case "5":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 5
                    }
                });
                break;
            case "6":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 6
                    }
                });
                break;
            case "7":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 7
                    }
                });
                break;
            case "8":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 8
                    }
                });
                break;
            case "9":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 9
                    }
                });
                break;
            case "10":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 10
                    }
                });
                break;
            case "11":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 11
                    }
                });
                break;
            case "12":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 12
                    }
                });
                break;
            case "13":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 13
                    }
                });
                break;
            case "14":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 14
                    }
                });
                break;
            case "15":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 15
                    }
                });
                break;
            case "16":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 16
                    }
                });
                break;
            case "17":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 17
                    }
                });
                break;
            case "18":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 18
                    }
                });
                break;
            case "19":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 19
                    }
                });
                break;
            case "20":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 20
                    }
                });
                break;
            case "21":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 21
                    }
                });
                break;
            case "22":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 22
                    }
                });
                break;
            case "23":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 23
                    }
                });
                break;
            case "24":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 24
                    }
                });
                break;
            case "25":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 25
                    }
                });
                break;
            case "26":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 26
                    }
                });
                break;
            case "27":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 27
                    }
                });
                break;
            case "28":
                setState(event);
                props.handleChange({
                    target: {
                        name: "cuisineType",
                        value: 28
                    }
                });
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
    return ( <div>
        <Select
        // closeMenuOnSelect={false}
        styles = {
            customStyles
        }
        // components={animatedComponents}
        // defaultValue={state}
        // isMulti
        options = {
            options
        }
        onChange = {
            handleChange
        }
        value = {
            state
        } /> </div >
    )
}