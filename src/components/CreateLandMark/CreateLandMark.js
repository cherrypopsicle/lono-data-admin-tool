import React from 'react';
import useForm from '../../hooks/useLandMark'
import LocationPicker from '../LocationPicker/LocationPicker';

export default function CreateLandMark() {

    const submit = () => {
        console.log(values)
        let token = "Bearer " + localStorage.getItem('jwt').substring(1, localStorage.getItem('jwt').length - 1);
        fetch(`https://api.lono.app/api/landmark/create/`, {
            method: 'POST',
            headers: {
                'Authorization':{token},
                'Content-Type': 'application/json',
                body: JSON.stringify(values)
            }
        })
    }

    const { handleChange,handleLocation, values, handleSubmit } = useForm(submit);

    return (
        <div className="container py-3">
            <div className="row">
                <div className="mx-auto col-lg-12">
                    <div className="card text-white bg-dark">
                        <div className="card-header">
                            <h4 className="mb-0">LandMark Information</h4>
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
                                    <label className="col-lg-3 col-form-label form-control-label">Photourl</label>
                                    <div className="col-lg-9" htmlFor="photourl">
                                        <input className="form-control" id="photourl" name="photourl" type="text" onChange={handleChange} value={values.photourl} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">HyperLink</label>
                                    <div className="col-lg-9" htmlFor="Hyperlink">
                                        <input className="form-control" id="Hyperlink" name="Hyperlink" type="text"onChange={handleChange}  value={values.Hyperlink} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                    <div className="col-lg-9" htmlFor="address">
                                    <LocationPicker select={handleLocation}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                    <div className="col-lg-9" htmlFor="city">
                                        <input className="form-control" id="city" name="city" type="text" placeholder="City" value={values.city} readOnly/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Latitude</label>
                                    <div className="col-lg-9" htmlFor="lat">
                                        <input className="form-control" id="lat" name="lat" type="text" placeholder="Latitude" value={values.lat} readOnly/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Longitude</label>
                                    <div className="col-lg-9" htmlFor="lng">
                                        <input className="form-control" id="lng" name="lng" type="text" placeholder="Longitude" onChange={handleChange} value={values.lng} readOnly/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-6">
                                        <input type="reset" className="btn btn-secondary col-lg-6" value="Cancel" />
                                        <input type="submit" className="btn btn-primary col-lg-6" value="Save Changes" />
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
