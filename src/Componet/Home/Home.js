import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

function Home(){

    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState("");

    const getTopAnime = async () => {
        const temp = await fetch (`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());
      
        setTopAnime(temp.top.slice(0,5));

    }
    useEffect(() => {
        getTopAnime();
        console.log("top Anime")
    }, [])

    const handleSearch = e =>{
        e.preventDefault();
        
        fetchAnime(search)
    }

    const fetchAnime = async (query) =>{
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
        .then(res => res.json());

        setAnimeList(temp.results);
        console.log(temp.results);
    }

    return(
        <div className="mt-5">
            <h1 className="main-header mt-5">Remember<strong className="all">All</strong></h1>
           <div className="content-wrap">
            <Sidebar topAnime={topAnime}/>
            <MainContent 
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            />
           </div>
        </div>
    )
}

export default Home;