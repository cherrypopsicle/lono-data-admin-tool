import React, { useState, useEffect } from 'react';
import { landmarkTypeCheck } from '../../services/types'
import Pagination from '../Pagination/Pagination'
import UpdateLandmark from '../UpdateLandMark/UpdateLandMark'


export default function LandMark() {
    const [totalPage, settotalPage] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [User, setUser] = useState("")
    var oldValues = {};

    const deleteOne = (id) => {
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        console.log(token)
        setloading(true)
        fetch(`https://api.lono.app/api/landmark/delete/${id}`, {
            method: "delete",
            headers: {
                "Authorization": token
            }
        }).then(res => {
            if (res.status === 200) {
                let newData = data.filter(data => data.id !== id)
                setdata(newData);
                setloading(false);
            }
        })
    }

    useEffect(() => {
        setloading(true)
        fetch(`https://api.lono.app/api/landmark/all/Montreal/${currentPage}`).then(res => res.json()).then(result => { console.log(result); settotalPage(result.length); setloading(false); setdata(result.data.$values) })
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
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Update LandMark</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                <li className="list-group-item">Name : {oldValues.name}</li>
                                <li className="list-group-item list-group-item-primary">Description: {oldValues.description}</li>
                                <li className="list-group-item list-group-item-secondary">HyperLink: {oldValues.Hyperlink}</li>
                                <li className="list-group-item list-group-item-success">PhotoUrl: {oldValues.photourl}</li>
                                <li className="list-group-item list-group-item-danger">Address: {oldValues.address}</li>
                                <li className="list-group-item list-group-item-warning">City: {oldValues.city}</li>
                                <li className="list-group-item list-group-item-info">Latitude: {oldValues.lat}</li>
                                <li className="list-group-item list-group-item-light">Longitude: {oldValues.lng}</li>
                                <li className="list-group-item list-group-item-dark">LandMark Type: {landmarkTypeCheck(oldValues.landmarkType)}</li>
                            </ul>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={isSubmitting}>Close</button>
                            <button type="submit" className="btn btn-success" onClick={handleSubmit} data-dismiss="modal" value="Update Landmark" disabled={isSubmitting}> Update LandMark </button>
                        </div> */}
                    </div>
                </div>
            </div>
            {loading ? (
                <div className="d-flex justify-content-end">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) : (
                    <table className="table">
                        <thead>
                            <tr>
                                {User.userType !== 0 && (<React.Fragment>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Edit</th>
                                </React.Fragment>)}
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">photoUrl</th>
                                <th scope="col">Hyperlink</th>
                                <th scope="col">Lat</th>
                                <th scope="col">Lng</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">LandMarkType</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map(data => (
                                <tr key={data.id}>
                                    {User.userType !== 0 && (<React.Fragment>
                                        <td><button className="btn btn-danger" onClick={() => deleteOne(data.id)}>Delete</button></td>
                                        <td><input type="reset" className="btn btn-primary" data-toggle="modal" onClick={console.log(data)} data-target="#exampleModalCenter" value="Edit" /></td>
                                    </React.Fragment>)}

                                    <td>{data.id || "null"}</td>
                                    <td>{data.name || "null"}</td>
                                    <td >{data.description || "null"}</td>
                                    <td>{data.hyperlink || "null"}</td>
                                    <td>{<a href={data.photoUrl}>{data.photoUrl.slice(0, 30) + "..."}</a> || "null"}</td>
                                    <td>{data.lat || "null"}</td>
                                    <td>{data.lng || "null"}</td>
                                    <td>{(data.address != null) ? data.address : "null"}</td>
                                    <td>{(data.city != null) ? data.city : "null"}</td>
                                    <td>{(data.landmarkType != null) ? landmarkTypeCheck(data.landmarkType) : "null"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>)}
            <Pagination postPerPage={30} totalPosts={totalPage} paginate={paginate} currentPage={currentPage} />

        </div>
    )
}
