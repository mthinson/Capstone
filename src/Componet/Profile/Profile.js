import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Checkout from "../CheckOut/Checkout";
import WatchList from "../WatchList/WatchList";
import SavedList from './../SavedList/SavedList';

function Profile(){

    //finding user email and getting the first name
    const [user, setUser] = useState({});

    useEffect(()=>{
        const params={
            email:localStorage.getItem('loggedInStudent')
        }
        axios.get('http://localhost:8080/findUser', {params})
        .then(response => {
            //Spring returns a User Object hence we save in 
            //the state variable called user
           setUser(response.data);

        }).catch(error=>{

        });
    },[]
    //this argument allows a render when this variable updates. since we only want 
    //to call this function once when the componet loads, no need to add a tracking variable
    );


    // getting anime list for new seasons coming out!
    const [checkAnime, setCheckAnime] = useState([]);

    const getCheckAnime = async () => {
        const temp = await fetch (`https://api.jikan.moe/v3/season/later`)
        .then(res => res.json());
      

        setCheckAnime(temp.anime.slice(0,5));

    }
    useEffect(() => {
        getCheckAnime();
        console.log("check out this Anime")
    }, [])

    //console.log(checkAnime);

    //getting the watch list data. 
    const [items, setItems] = useState([]);//open array of watchitems

    
    useEffect(()=>{
        const params={
            userId:localStorage.getItem('loggedInStudent')
        }
       //get this from spring backend controller. links to database
        axios.get('http://localhost:8080/findWatchList', {params})
        .then(response => {
            //Spring returns a saved Object hence we save in 
           // the state variable called item
           setItems(response.data);

        }).catch(error=>{

        });
    },[])


    const deleteValue = (index) =>{
        const tempItems = [...items];
        const deletedItem = items[index];
          tempItems.splice(index, 1);

          setItems(tempItems);
         

          axios.post("http://localhost:8080/deleteData",deletedItem).then(response =>{
            console.log("deleted data")
        }).catch(error =>{
            console.log("error inside delete button")
        })
          
      }

      const [viewed, setViewed] = useState([]);//open array of watchitems

    
      useEffect(()=>{
          const params={
              userId:localStorage.getItem('loggedInStudent')
          }
         //get this from spring backend controller. links to database
          axios.get('http://localhost:8080/findSavedList', {params})
          .then(response => {
              //Spring returns a saved Object hence we save in 
             // the state variable called item
             setViewed(response.data);
  
          }).catch(error=>{
  
          });
      },[])
  
 
    return(
        
<div className=" mt-5 main-content">
            <Checkout checkAnime={checkAnime} />
     <div className="body-content">
        <div className="jumbotron header">
            <div className="userInfo">
                <h1 className="display-1 mx-auto text-white "> Welcome {user.firstName}</h1>
                <p className="lead text-white">You have logged in!</p>
                <p className="lead text-white">Check out some new anime!</p>
            </div>
        </div>
        <div className="lists">
            <div className="watch-list">
                <h4 className="list-header">My Saved List</h4>
                <WatchList deleteValue={deleteValue} items = {items}/>
               
            </div>
            <div className="viewed-list">
                <h4 className="list-header">My Viewed List</h4>
                <SavedList  viewed = {viewed}/>
            </div>
        </div>
        
    </div>
        
</div>
   
        
    )
    }
export default Profile;