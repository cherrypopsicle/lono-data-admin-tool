import React from 'react';
import useForm from '../../hooks/useVenue'
import LocationPicker from '../LocationPicker/LocationPicker';
import ActionType from '../ActionType/ActionType'
import {actionTypeCheck} from '../../services/types'
import VenueType from '../VenueType/VenueType';

export default function CreateVenue() {

    const submit = (success, error, isSubmitting) => {
        console.log(values)
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        try {
            fetch(`https://api.lono.app/api/venue/create`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
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

    const { handleChange, handleLocation, values, handleSubmit, error, success, isSubmitting } = useForm(submit);

    return (
        <div className="container py-3">
            <div className="row">
                <div className="mx-auto col-lg-12">
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Create Venue</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">Name : {values.name}</li>
                                        <li className="list-group-item list-group-item-primary">Description : {values.description}</li>
                                        <li className="list-group-item list-group-item-primary">HyperLink : {values.Hyperlink}</li>
                                        <li className="list-group-item list-group-item-primary">PhotoUrl: {values.photoUrl}</li>
                                        <li className="list-group-item list-group-item-primary">Location: {values.address}</li>
                                        <li className="list-group-item list-group-item-primary">City: {values.city}</li>
                                        <li className="list-group-item list-group-item-primary">Latitude: {values.lat}</li>
                                        <li className="list-group-item list-group-item-primary">Longitude: {values.lng}</li>
                                        <li className="list-group-item list-group-item-primary">Action Type: {actionTypeCheck(values.actiontypes)}</li>
                                        <li className="list-group-item list-group-item-primary">Repeat: {values.repeat ?"True":"False"}</li>

                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={isSubmitting}>Close</button>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit} data-dismiss="modal" disabled={isSubmitting} >Create Venue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card text-white bg-dark">
                        <div className="card-header">
                            <h4 className="mb-0">Venue Information</h4>
                        </div>
                        <div className="card-body">
                            <form className="form" role="form" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="name">Name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" id="name" name="name" type="text" onChange={handleChange} value={values.name} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor="description">Description</label>
                                    <div className="col-lg-9">
                                        <textarea className="form-control" id="description" type="text" name="description" onChange={handleChange} value={values.description} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">HyperLink</label>
                                    <div className="col-lg-9" htmlFor="hyperlink">
                                        <input className="form-control" id="hyperlink" name="hyperlink" type="text" onChange={handleChange} value={values.hyperlink} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">PhotoUrl</label>
                                    <div className="col-lg-9" htmlFor="profileurl">
                                        <input className="form-control" id="hyperlink" name="hyperlink" type="text" onChange={handleChange} value={values.profileurl} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">VenueType</label>
                                    <div className="col-lg-9" htmlFor="venuetypes">
                                        <VenueType handleChange={handleChange} value={values.venuetypes}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">ActionType</label>
                                    <div className="col-lg-9" htmlFor="actiontypes">
                                        <ActionType handleChange={handleChange} value={values.actiontypes} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Location</label>
                                    <div className="col-lg-9" htmlFor="address">
                                        <LocationPicker select={handleLocation} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                    <div className="col-lg-9" htmlFor="city">
                                        <input className="form-control" id="city" onChange={handleChange} name="city" type="text" placeholder="City" value={values.city} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Latitude</label>
                                    <div className="col-lg-9" htmlFor="lat">
                                        <input className="form-control" id="lat" name="lat" type="text" placeholder="Latitude" value={values.lat} readOnly />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Longitude</label>
                                    <div className="col-lg-9" htmlFor="lng">
                                        <input className="form-control" id="lng" name="lng" type="text" placeholder="Longitude" onChange={handleChange} value={values.lng} readOnly />
                                    </div>
                                </div>
                                {success && (<div class="alert alert-success" role="alert"> Success</div>)}
                                {error && (<div class="alert alert-danger" role="alert"> Contact Vrushabh there is an error!</div>)}
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-6">
                                    <input type="reset" className="btn btn-primary col-lg-6" data-toggle="modal" data-target="#exampleModalCenter" value="Save Changes" />                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
