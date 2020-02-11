import React, { useState, useEffect } from 'react';
import { venueType, musicTypeCheck, actionTypeCheck } from '../../services/types'
import Pagination from '../Pagination/Pagination'


export default function Venue() {

    const [totalPage, settotalPage] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [searchterm, setsearchterm] = useState("");
    const [User, setUser] = useState("");
    const [id, setid] = useState("")

    const handleChange = (e) => {
        setsearchterm(e.target.value)
    }

    const deleteOne = () => {
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        setloading(true)
        console.log(`https://api.lono.app/api/venue/delete/${id}`)
        fetch(`https://api.lono.app/api/venue/delete/${id}`, {
            method: "delete",
            headers: {
                "Authorization": token
            }
        }).then(res => {
            if (res.status === 200) {
                let newData = data.filter(data => data.venueId !== id)
                setdata(newData);
                setloading(false);
            }
        })
    }
    // handleSearch data
    const handleSearch = (e) => {
        e.preventDefault();
        let url = `https://api.lono.app/api/data/search/${searchterm}/1`
        console.log(url)
        fetch(url).then(res => res.json().then(result => setdata(result.$values)))
    }

    // Load data when Venue Event is Called
    useEffect(() => {
        setloading(true)
        fetch(`https://api.lono.app/api/venue/all/Montreal/${currentPage}`).then(res => res.json()).then(result => { console.log(result); settotalPage(result.length); setloading(false); setdata(result.data.$values) })
        if (localStorage.getItem('jwt') && localStorage.getItem('cached_token')) {
            let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
            let id = localStorage.getItem('cached_token').substring(1, localStorage.getItem('cached_token').length - 1);
            fetch(`https://api.lono.app/api/account/data/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            }).then(res => { res.json().then(result => setUser(result)) })
        }
    }, [currentPage]);

    const paginate = number => { setcurrentPage(number) }

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleChange} placeholder="Enter Venue Name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchterm} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={handleSearch} type="button">Search</button>
                </div>
            </div>
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
                                        Hey {User.name}. You are about to delete a venue with id:{id}. Are you sure?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" onClick={deleteOne}>Delete Venue</button>
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
                                    <th scope="col">Venue Id</th>
                                    <th scope="col">Venue Type</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col"> Hyperlink</th>
                                    <th scope="col">Photo Url</th>
                                    <th scope="col">Lat</th>
                                    <th scope="col">Lng</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Actions</th>
                                    <th scope="col">MusicType</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map(data => (
                                    <tr key={data.venueId}>
                                        {User.userType !== 0 && (<React.Fragment>
                                            <td><button type="button" className="btn btn-danger" onClick={()=>{setid(data.venueId)}} data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
                                            <td><button className="btn btn-info" disabled>Edit</button></td>
                                        </React.Fragment>)}
                                        <td>{data.venueId || "null"}</td>
                                        <td>{(data.venueType != null) ? venueType[data.venueType] : "null"}</td>
                                        <td>{data.name || "null"}</td>
                                        <td >{data.description || "null"}</td>
                                        <td>{data.hyperlink || "null"}</td>
                                        <td>{(data.profileUrl != null) ? (<a href={data.profileUrl}>{data.profileUrl.slice(0, 30) + "..."}</a>) : "null"}</td>
                                        <td>{data.lat || "null"}</td>
                                        <td>{data.lng || "null"}</td>
                                        <td>{(data.address != null) ? data.address : "null"}</td>
                                        <td>{(data.city != null) ? data.city : "null"}</td>
                                        <td>{(data.phoneNumber != null) ? data.phoneNumber : "null"}</td>
                                        <td>{(data.actions != null) ? actionTypeCheck(data.actions) : "null"}</td>
                                        <td>{(data.musicType != null) ? musicTypeCheck(data.musicType) : "null"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </React.Fragment>)}
            <Pagination postPerPage={30} totalPosts={totalPage} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}
