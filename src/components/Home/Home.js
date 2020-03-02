import React, { useState, useEffect } from 'react';
import "./Home.css";
import Count from '../Count/Count'


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
                    <h5 className="card-title">Welcome cutest {User.name}. Here is the Quote of the Day</h5>
                    <h6 className="card-subtitle mb-2 text-muted">By - {quote.author}</h6>
                    <p className="card-text">{quote.quote}</p>
                </div>
            </div>
            <div className="row mb-3">
            <Count/>
            </div>


        </div>
    )
}
