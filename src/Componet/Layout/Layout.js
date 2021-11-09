import React from 'react';
import SignUp from '../SignUp/SignUp';
import Header from '../Header/Header';
import {Route, withRouter} from 'react-router-dom';
import AboutUs from './../AboutUs/AboutUs';
import ThankYou from './../ThankYou/ThankYou';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';


function Layout(){

    const toggleDisplay = () =>{
        if(localStorage.getItem('loggedInStudent')){
            return(
                <div>
                <Route path="/profile" component={Profile} />
                
            </div>
            )
           
        }
        return(
            <div>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/thank-you" component={ThankYou} />
        </div>
        )
       
    }

    return(
        <div>
            <Header />
            {toggleDisplay()}
            <Route path="/about-us" component={AboutUs} />
            <Route exact path="/" component={Home} /> 
            <Route path="/home" component={Home} />
        </div>
    )
}
export default withRouter(Layout);