import React from 'react'
import Home from './components/Home/Home'
import Login from './components/login/Login'
import Event from './components/Event/Event'
import {Switch,Route} from 'react-router-dom'
import PrivateRoute from './services/auth/PrivateRoute'
import LandMark from './components/LandMark/LandMark'
import Venue from './components/Venue/Venue'
import CreateEvent from './components/CreateEvent/CreateEvent'
import CreateLandMark from './components/CreateLandMark/CreateLandMark'
import CreateVenue from './components/CreateVenue/CreateVenue'
import NavBar from './components/Navbar/Navbar'
import UpdateLandMark from './components/UpdateLandMark/UpdateLandMark'
import LocationPicker from './components/LocationPicker/LocationPicker'
import Donations from './components/Donations/Donations'
import ErrorPage from './components/ErrorPage/ErrorPage'


export default function MainRouter() {
    return (
      <NavBar>
          <Switch>
            <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
            {/* <Route exact path='/signup' component={Signup}></Route> */}
            <Route exact path='/' component={Login}></Route>
            <PrivateRoute exact path='/venue' component={Venue}></PrivateRoute>
            <PrivateRoute exact path='/event' component={Event}></PrivateRoute>
            <PrivateRoute exact path='/landmark' component={LandMark}></PrivateRoute>
            <PrivateRoute exact path='/createVenue' component={CreateVenue}></PrivateRoute>
            <PrivateRoute exact path='/createEvent' component={CreateEvent}></PrivateRoute>
            <PrivateRoute exact path='/createLandMark' component={CreateLandMark}></PrivateRoute>
            {/* <PrivateRoute exact path='/updateLandmark' component={UpdateLandMark}></PrivateRoute> */}
            <Route exact path = '/xyz' component={LocationPicker}></Route>
            <Route component={ErrorPage}/>
        </Switch>
        </NavBar>
    )
}
