import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';

function Header(){

    //state to set user input
    const [signInUser, setSignInUser] = useState({email:'', password: ''})
    const history = useHistory();
    //when the handler is changed it records input value and sets state
    const changeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        const tempSignIn = {...signInUser};
        tempSignIn[name] = value;
        setSignInUser(tempSignIn)
    }

    const signInSubmitHandler = () =>{
        axios.post('http://localhost:8080/login', signInUser).then(response =>{
             localStorage.setItem("loggedInStudent",response.data.email);
             history.push("/home")
             console.log("signed up")

        }).catch(error =>{
            console.log("Problem signing in. ")
        });
 
     }
     const signOut=()=>{
        localStorage.clear();
        history.push("/")
     }
     const toggleDisplay = () =>{
         if(localStorage.getItem('loggedInStudent')){
            return(
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/profile">Profile</Link>
                  </li>
                </ul>
                <form className="d-flex">        
                  <button onClick={signOut} className="btn btn-outline-success" type="button">Logout</button>
                </form>
              </div>
            )
         }else{
             return(
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/sign-up">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-us">About Us</Link>
                  </li>
                
                </ul>
                <form className="d-flex sign-in">
                  <input onChange={changeHandler} className="form-control me-2" value={signInUser.email} name="email" type="email" placeholder="Email" aria-label="Email" />
                  <input onChange={changeHandler} className="form-control me-2" value={signInUser.password} name="password" type="password" placeholder="Password" aria-label="Password" />
                  <button onClick={signInSubmitHandler} className="btn btn-outline-success sign-in-btn" type="button">Login</button>
                </form>
              </div>
             )
         }
     }
   

    return(
        <header>
   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Remember <strong className="all">All</strong></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        {toggleDisplay()}
    </div>
  </nav>
</header>



    )
    
}

export default Header;