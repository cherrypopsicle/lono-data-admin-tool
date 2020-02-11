import React,{useState} from 'react'
import './login.css'
import lonoimage from '../../assests/Lono.png';
import useLogin from '../../hooks/useLogin';
import { authenticate } from '../../services/auth/auth';
import { Redirect } from 'react-router-dom';


export default function Login(props) {
    const [error, seterror] = useState(null)
    const [redirectToHome, setredirectToHome] = useState(false)

    // Submit function which logs in the user
    const submit =() => {
        fetch(`https://api.lono.app/api/auth/data/login`,{
            method:"post",
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if(res.status !== 200){
                res.json().then(result => seterror(result.login_failure.$values[0]))
            }else{
                res.json().then(result => {console.log(result);
                    authenticate(result.auth_token,result.id,()=>{
                        setredirectToHome(true);
                    })
                })
            }
        })
    }

    // Use the Login Form Hook to handle input data changes
    const {handleChange,values,handleSubmit} = useLogin(submit);


    if(redirectToHome){
        return <Redirect to="/home"/> //if user is  authorized return him to Home Screen
    }else{
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">
                    <h1 className="display-4"><span className="container-span"><img src={lonoimage} alt="Lono app brand" className="image-jumbo"/></span>Login</h1>
                    <p className="lead">This is Lono's Offical Data Tool.</p>
                </div>
            </div>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" onChange={handleChange} id="email" name="Email" aria-describedby="emailHelp" placeholder="Enter email" value={values.email} autoComplete="false"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" onChange={handleChange} id="password" name="Password"placeholder="Password" value={values.password} autoComplete="false"/>
                    </div>
                        {(error && <p className="alert alert-danger">{error}</p> )}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </React.Fragment>
    )}
}
