import React,{useEffect,useState, useReducer} from 'react'

export default function Count() {

    const defaultProps = {
        "$id": "12",
        "events": 0,
        "landmarks": 0,
        "venues": 0,
        "users": 0
      }

    const [state, setstate] = useState(defaultProps)
    useEffect(() => {
        fetch('https://api.lono.app/api/data/count/all').then(res => {
                res.json().then(result => setstate(result))
            })
        setInterval(() => {
            fetch('https://api.lono.app/api/data/count/all').then(res => {
                res.json().then(result => setstate(result))
            })     
        }, 5000);
        
    }, [])
    return (
        <React.Fragment>
            <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-dark text-white h-100">
                        <div className="card-body bg-dark">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">{state.users}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Events</h6>
                            <h1 className="display-4">{state.events}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-twitter fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">LandMarks</h6>
                            <h1 className="display-4">{state.landmarks}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Venues</h6>
                            <h1 className="display-4">{state.venues}</h1>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
