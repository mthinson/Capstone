import React from 'react'

const SavedList = (props) => {
    return props.viewed.map((item, index)=>{

        return<li className="saved-item" key={index}>
            <span >{item.title}</span>
            <span className="rating">Rating: {item.score}/10</span>
           
            
        </li>
       
        
    })
}
export default SavedList
