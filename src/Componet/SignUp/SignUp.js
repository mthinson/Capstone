import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router';


function SignUp(){

    const [user, setUser] = useState({firstName: '', lastName:'', email:'', password:'', age: ''});
    const history = useHistory();

    const changeHandlerUser = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        const tempUser = {...user};

        tempUser[name] = value;
        setUser(tempUser);
    }

    const signUpSubmitHandler = () =>{
        axios.post("http://localhost:8080/save", user).then(response =>{
            history.push("/thank-you");
            console.log("signed up")
        }).catch(error =>{
            console.log("error inside signing in handler")
        })
    } 

    return(
        
<form className="row g-3 mt-5">
  <h2> Sign up below!!!</h2>
<div className="col-md-6">
    <label for="inputFirstName" className="form-label">First Name</label>
    <input onChange={changeHandlerUser} name="firstName" value={user.frstName} type="text" className="form-control" id="inputFirstName" />
  </div>
  <div className="col-md-6">
    <label for="inputLastName" className="form-label">LastName</label>
    <input onChange={changeHandlerUser} name="lastName" value={user.lastName} type="text" className="form-control" id="inputLastName" />
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input onChange={changeHandlerUser} name="email" value={user.email} type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input onChange = {changeHandlerUser} name="password" value={user.password} type="password" className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12 mx-auto">
    <label for="inputAge" className="form-label w-50 ">Age</label>
    <input onChange={changeHandlerUser} name="age" value={user.age} type="text" className="form-control w-50 justify-content-center" id="inputAge"  />
  </div>

    <div class="d-grid gap-2 ">
      <button onClick={signUpSubmitHandler} className="bg-dark btn btn-outline-success w-25 mx-auto" type="button">Sign up</button>
    </div>
</form>

    )
}
export default SignUp;