import React from 'react';
import useForm from '../../hooks/useLandMark'
import LocationPicker from '../LocationPicker/LocationPicker';
import LandMarkType from '../LandMarkType/LandMarkType';

import {landmarkTypeCheck} from '../../services/types'

export default function UpdateLandMark(props) {

    const submit = (success, error, isSubmitting) => {
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        try {
            fetch(`https://api.lono.app/api/landmark/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(values)
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

    const { handleChange, handleLocation, values, handleSubmit, error, success, isSubmitting } = useForm(submit, props);

    return (
        <div className="container py-3">
            <div className="row">
                <div className="mx-auto col-lg-12">
                    {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <li className="list-group-item">Name : {values.name}</li>
                                        <li className="list-group-item list-group-item-primary">Description: {props.description}</li>
                                        <li className="list-group-item list-group-item-secondary">HyperLink: {props.Hyperlink}</li>
                                        <li className="list-group-item list-group-item-success">PhotoUrl: {props.photourl}</li>
                                        <li className="list-group-item list-group-item-danger">Address: {props.address}</li>
                                        <li className="list-group-item list-group-item-warning">City: {props.city}</li>
                                        <li className="list-group-item list-group-item-info">Latitude: {props.lat}</li>
                                        <li className="list-group-item list-group-item-light">Longitude: {props.lng}</li>
                                        <li className="list-group-item list-group-item-dark">LandMark Type: {landmarkTypeCheck(props.landmarkType)}</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={isSubmitting}>Close</button>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit} data-dismiss="modal" value="Update Landmark" disabled={isSubmitting}> Update LandMark </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="card text-white bg-dark">
                        <div className="card-header">
                            <h4 className="mb-0">LandMark Information</h4>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="name">Name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" id="name" name="name" type="text" onChange={handleChange} value={props.name} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="description">Description</label>
                                    <div className="col-lg-9">
                                        <textarea className="form-control" id="description" type="text" name="description" onChange={handleChange} value={props.description} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Photourl</label>
                                    <div className="col-lg-9" htmlFor="photourl">
                                        <input className="form-control" id="photourl" name="photourl" type="text" onChange={handleChange} value={props.photourl} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">HyperLink</label>
                                    <div className="col-lg-9" htmlFor="Hyperlink">
                                        <input className="form-control" id="Hyperlink" name="Hyperlink" type="text" onChange={handleChange} value={props.Hyperlink} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">LandMarkType</label>
                                    <div className="col-lg-9" htmlFor="photourl">
                                        <LandMarkType handleChange={handleChange} value={props.landmarkType || 0} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                    <div className="col-lg-9" htmlFor="address">
                                        <LocationPicker select={handleLocation} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                    <div className="col-lg-9" htmlFor="city">
                                    <input className="form-control" id="city" onChange={handleChange} name="city" type="text" placeholder="City" value={props.city}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Latitude</label>
                                    <div className="col-lg-9" htmlFor="lat">
                                        <input className="form-control" id="lat" name="lat" type="text" placeholder="Latitude" value={props.lat} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Longitude</label>
                                    <div className="col-lg-9" htmlFor="lng">
                                        <input className="form-control" id="lng" name="lng" type="text" placeholder="Longitude" onChange={handleChange} value={props.lng} readOnly />
                                    </div>
                                </div>
                                {success && (<div class="alert alert-success" role="alert"> Success</div>)}
                                {error && (<div class="alert alert-danger" role="alert"> Contact Vrushabh there is an error!</div>)}
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <input type="reset" className="btn btn-primary col-lg-6" data-toggle="modal" data-target="#exampleModalCenter" value="Save Changes" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
