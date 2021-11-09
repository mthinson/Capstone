import React from 'react'

function Checkout({checkAnime}) {


    
    return (
        <aside>
        <nav>
           <h3 className="mt-5">Upcomming Seasons</h3>
           {checkAnime.map(anime => (
               <a  className=""
               href={anime.url}
               target="blank"
               key={anime.mal_id}
               rel="noreferrer">
               <img src={anime.image_url} className="checkImg" alt={anime.synopsis}/>
               {anime.title} 
                 </a>
           ))}
          
       </nav>
         
     </aside>
    )
}

export default Checkout;