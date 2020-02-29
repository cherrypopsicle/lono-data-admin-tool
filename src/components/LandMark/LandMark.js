import React, { useState, useEffect } from 'react';
import { landmarkTypeCheck } from '../../services/types'
import Pagination from '../Pagination/Pagination'
import UpdateLandmark from '../UpdateLandMark/UpdateLandMark'
import useForm from '../../hooks/useLandMark';

import LocationPicker from '../LocationPicker/LocationPicker';
import LandMarkType from '../LandMarkType/LandMarkType';


export default function LandMark() {
    const [totalPage, settotalPage] = useState(0)
    const [currentPage, setcurrentPage] = useState(0)
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [User, setUser] = useState("")
    const [landmark, setLandmark] = useState({});
    const [editClicked, setEditClick] = useState(false);

    const submit = (success, error, isSubmitting) => {
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        try {
            fetch(`http://localhost:65049/api/landmark/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(landmark)
            }).then(res => {
                if (res.status === 200) {
                    success(true);
                    error(false);
                    isSubmitting(false)
                } else {
                    success(false);
                    error(true)
                    isSubmitting(false)
                }
            });
        } catch (error) {
            error(true)
            isSubmitting(false)
        }
    }
    const { handleChange, handleLocation, values, handleSubmit, error, success, isSubmitting } = useForm(submit);

    const edit = (data) => {
        setLandmark(data);
        console.log(landmark);
    }


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
            {loading ? (
                <div className="d-flex justify-content-end">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>) : (
                    <React.Fragment>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Edit LandMark</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                        <div className="modal-body">
                                            <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="name">Name</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" id="name" name="name" type="text" onChange={handleChange} placeholder={landmark.name} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="description">Description</label>
                                                    <div className="col-lg-9">
                                                        <textarea className="form-control" id="description" type="text" name="description" onChange={handleChange} placeholder={landmark.description} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Photourl</label>
                                                    <div className="col-lg-9" htmlFor="photourl">
                                                        <input className="form-control" id="photourl" name="photourl" type="text" onChange={handleChange} placeholder={landmark.photoUrl} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">HyperLink</label>
                                                    <div className="col-lg-9" htmlFor="Hyperlink">
                                                        <input className="form-control" id="Hyperlink" name="Hyperlink" type="text" onChange={handleChange} placeholder={landmark.hyperLink} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">LandMarkType</label>
                                                    <div className="col-lg-9" htmlFor="photourl">
                                                        <LandMarkType handleChange={handleChange} value={landmark.landmarkType || 0} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                                    <div className="col-lg-9" htmlFor="address">
                                                        <LocationPicker address={landmark.address} select={handleLocation} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                                    <div className="col-lg-9" htmlFor="city">
                                                        <input className="form-control" id="city" onChange={handleChange} name="city" type="text" placeholder={landmark.city} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Latitude</label>
                                                    <div className="col-lg-9" htmlFor="lat">
                                                        <input className="form-control" id="lat" name="lat" type="text" value={landmark.lat} placeholder={landmark.lat} readOnly />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label">Longitude</label>
                                                    <div className="col-lg-9" htmlFor="lng">
                                                        <input className="form-control" id="lng" name="lng" type="text" placeholder="Longitude" onChange={handleChange} placeholder={landmark.lng} readOnly />
                                                    </div>
                                                </div>
                                                {success && (<div className="alert alert-success" role="alert"> Success</div>)}
                                                {error && (<div className="alert alert-danger" role="alert"> Contact Vrushabh there is an error!</div>)}
                                                {/* <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label"></label>
                                                <div className="col-lg-9">
                                                    <input type="reset" className="btn btn-secondary col-lg-6" value="Cancel" />
                                                    <input type="reset" className="btn btn-primary col-lg-6" data-toggle="modal" data-target="#exampleModalCenter" value="Save Changes" />
                                                </div>
                                            </div> */}
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-success" onClick={handleSubmit}>Edit Landmark</button>
                                        </div>
                                    ))}
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
                                        {User.userType !== 0 &&
                                            (<React.Fragment>
                                                <td><button className="btn btn-danger" onClick={() => deleteOne(data.id)}>Delete</button></td>
                                                <td><input type="reset" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => edit(data)} value="Edit" /></td>
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
                        </table>
                    </React.Fragment>)}
            <Pagination postPerPage={30} totalPosts={totalPage} paginate={paginate} currentPage={currentPage} />
        </div>
    )
}

