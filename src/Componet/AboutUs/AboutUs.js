import React from 'react';
import pic1 from '../../images/me2.jpg';
import { useState, } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function AboutUs(){

    const [guest, setGuest] = useState({firstName: '', lastName:'', email:'', message:''});
    const history = useHistory();

    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        const tempGuest = {...guest};

        tempGuest[name] = value;
        setGuest(tempGuest);
    }

    const SubmitHandler = () =>{
        axios.post("http://localhost:8080/sendMail", guest).then(response =>{
            history.push("/home");
            console.log("mail sent to eclipse")
        }).catch(error =>{
            console.log("error inside signing in handler")
        })
    } 

    return(
        <div className="container d-flex flex-wrap  mt-5">
             <div className="top-container mt-5 d-inline-flex align-items-end ">
                   
                        <img src={pic1} alt="Pic of the author smiling" className="pic1" />
                   
                   <div className="align-items-end ps-2 ">
                        <h4 className="display-4 ">The Summary</h4>
                        <p className="lead  ">Matthew Hinson is a Web developer with high asperiations of developing 
                            beautiful and sophisticated experiences. Military veteran with a passion for new and exciting
                            tech. advances. Currently working towards a full stack Java development course while his dog
                             begs him for the next snack.
                        </p>
                   </div>
               </div>
               
               <article>
                
                   <h4 className="display-4">The Novel</h4>
                   <p className="lead">Born in Bourbon, Missouri I am a son of a maid and a electrician. Growing 
                   up in a small town is about as much fun as you can imagine. After graduating highschool and a 
                   short periode in college for graphic design I joined the U.S.M.C. The Marine Corps gave me 
                   the discipline and confidence needed to excel in life. Two deployments and 5 years later I was 
                   released back into the wild.<br />

                   Back to college to try and figure out what to do with life, after trying a little bit of 
                   everything and switching majors I found what really gets me excited to build. Technology and 
                   the possibilities of Artificial intelligence with the opportunity to build beautiuful interfaces.
                    Yet, after another time at college while building multiple business and working 
                   my body to the bone made me realize I need to do what inspires me and helps people. Sidelining 
                   all other work I jumped head first into Claim Academy ready to learn and start a life that a 
                   small town boy of a maid and electrician could never of dreamed possible. 

                    
                   </p>
               </article>

            <div>
                <form className="row g-3 mt-5">
                    <h2> Send us a Message!</h2>
                    <div class="col-md-6">
                         <label for="inputFirstName" class="form-label">First Name</label>
                        <input onChange={changeHandler} name="firstName" required value={guest.firstName} type="text" class="form-control" id="inputFirstName" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputLastName" class="form-label">LastName</label>
                        <input onChange={changeHandler} name="lastName" required value={guest.lastName} type="text" class="form-control" id="inputLastName" />
                    </div>

                    <div className="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input onChange={changeHandler} name="email" required value={guest.email} type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        
                        <textarea onChange={changeHandler} name="message" required id="message" value={guest.message} placeholder="add a comment..." rows="4" cols="50"/>
                       
                    </div>
                    <div class="d-grid gap-2 justify-content-center ">
                        <button onClick={SubmitHandler} class="bg-dark btn btn-outline-success w-100 " type="button">Message</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default AboutUs;