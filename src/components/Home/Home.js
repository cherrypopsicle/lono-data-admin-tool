import React, { useState, useEffect } from 'react';
import "./Home.css";


export default function Home() {

    const [quote, setquote] = useState("");
    const [User, setUser] = useState("")

    useEffect(() => {

            
        fetch(`https://quotes.rest/qod.json`).then(res => res.json().then(result => setquote(result.contents.quotes[0])))
        if(localStorage.getItem('jwt') && localStorage.getItem('cached_token')){
            let token = "Bearer " + localStorage.getItem('jwt').substring(1,localStorage.getItem('jwt').length - 1);
            let id = localStorage.getItem('cached_token').substring(1,localStorage.getItem('cached_token').length - 1);
            fetch(`https://api.lono.app/api/account/data/${id}`,{
              method:'GET',
              headers:{
                  'Authorization': token
              }
          }).then(res => {res.json().then(result => setUser(result))})
          }
    }, [])
    return (
        <div>
            <div className="card text-white bg-dark mb-3" >
                <div className="card-body">
                    <h5 className="card-title">Welcome Beautiful {User.name}. Here is the Quote of the Day</h5>
                    <h6 className="card-subtitle mb-2 text-muted">By - {quote.author}</h6>
                    <p className="card-text">{quote.quote}</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-dark text-white h-100">
                        <div className="card-body bg-dark">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">134</h1>
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
                            <h1 className="display-4">87</h1>
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
                            <h1 className="display-4">125</h1>
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
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
