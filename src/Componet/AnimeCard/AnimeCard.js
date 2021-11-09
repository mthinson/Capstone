import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AnimeCard({anime}) {

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

    //when button is clicked it adds anime data to the backend. 

    const addData = () =>{
        const item = {
            malId: anime.mal_id,
            userId: user.email,
            title: anime.title,
            score: anime.score
            
        }
        
        //send to Spring to save in database
        axios.post("http://localhost:8080/saveData", item).then(response =>{
            console.log("saved data")
        }).catch(error =>{
            console.log("error inside add button in animecard")
        })

    }
    const addViewed = () =>{
        const item = {
            malId: anime.mal_id,
            userId: user.email,
            title: anime.title,
            score: anime.score
        }
        //send to Spring to save in database
        axios.post("http://localhost:8080/saveViewed", item).then(response =>{
            console.log("saved data")
        }).catch(error =>{
            console.log("error inside add viewed button in animecard")
        })

    }

    return (
        <article className="anime-card">
            <a 
            href={anime.url}
            target="_blank" 
            rel="noreferrer"
            >
                <figure>
                    <img src={anime.image_url}
                     alt="searched anime graphic"/>
                </figure>
                <h3>{anime.title}</h3>
                </a>
                <button onClick={addData} className="btn btn-warning addWatch" type="button">+ WatchList</button>
                <button onClick={addViewed} className="btn btn-success addViewd" type="button">+ ViewedList</button>
                
            
        </article>
    )
}

export default AnimeCard
