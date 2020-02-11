import React, { useState, useEffect } from 'react';
import './Event.css'
import { actionTypeCheck, musicTypeCheck, eventTypeCheck } from '../../services/types'
import Pagination from '../Pagination/Pagination';

export default function Event() {
    const [totalPage, settotalPage] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [User, setUser] = useState("");
    const [id, setid] = useState("");



    const deleteOne = () => {
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        console.log(token)
        setloading(true)
        fetch(`https://api.lono.app/api/event/delete/${id}`, {
            method: "post",
            headers: {
                "Authorization": token
            }
        }).then(res => {
            if (res.status === 200) {
                let newData = data.filter(data => data.id !== id)
                setdata(newData);
                setloading(false);
            }else{
                console.log(res)
            }
        })
    }

    useEffect(() => {
        setloading(true)
        fetch(`https://api.lono.app/api/event/all/Montreal/${currentPage}`).then(res => res.json()).then(result => { console.log(result); settotalPage(result.length); setloading(false); setdata(result.data.$values) })
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
    }, [currentPage])

    const paginate = number => { setcurrentPage(number) }

    return (
            <div >
                {loading ? (
                    <div className="d-flex justify-content-center ">
                        <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>) : (
                        <React.Fragment>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Delete Venue</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Hey {User.name}. You are about to delete a Event with id:{id}. Are you sure?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" onClick={deleteOne} data-dismiss="modal">Delete Venue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                {User.userType !== 0 && (<React.Fragment>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                            </React.Fragment>)}
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" width="70%">Description</th>
                                    <th scope="col">Starts</th>
                                    <th scope="col">Ends</th>
                                    <th scope="col">Hyperlink</th>
                                    <th scope="col">PhotoUrl</th>
                                    <th scope="col">Lat</th>
                                    <th scope="col">Lng</th>
                                    <th scope="col">MusicTypes</th>
                                    <th scope="col">actionType</th>
                                    <th scope="col">EventTypes</th>

                                </tr>
                            </thead>

                            <tbody>
                                {data.map(data => (
                                    <tr key={data.id}>
                                    
                                    {/* CHECK IF THE USER IS OF TYPE ADMIN */}
                                        {User.userType !== 0 && (
                                    <React.Fragment>
                                            <td><button type="button" className="btn btn-danger" onClick={()=>{setid(data.id)}} data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
                                            <td><button className="btn btn-info" disabled>Edit</button></td>
                                    </React.Fragment>
                                    )}
                                        <td>{data.id || "null"}</td>
                                        <td>{data.name || "null"}</td>
                                        <td width="70%">{data.description || "null"}</td>
                                        <td nowrap="true">{(data.starts != null) ? new Date(`${data.starts}`).toDateString() : "null"}</td>
                                        <td nowrap="true">{(data.ends != null) ? new Date(`${data.ends}`).toDateString() : "null"}</td>
                                        <td>{data.hyperlink || "null"}</td>
                                        <td>{<a href={data.photoUrl}>{data.photoUrl.slice(0, 30) + "..."}</a> || "null"}</td>
                                        <td>{data.lat || "null"}</td>
                                        <td>{data.lng || "null"}</td>
                                        <td>{(data.musictypes != null) ? musicTypeCheck(data.musictypes) : "null"}</td>
                                        <td>{(data.actionTypes != null) ? actionTypeCheck(data.actionTypes) : "null"}</td>
                                        <td>{(data.eventTypes != null) ? eventTypeCheck(data.eventTypes) : "null"}</td>


                                    </tr>
                                ))}
                            </tbody>
                        </table></React.Fragment>)}

                <Pagination postPerPage={30} totalPosts={totalPage} paginate={paginate} currentPage={currentPage} />
            </div>
    )
}
