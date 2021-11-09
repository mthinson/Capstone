import React from 'react'

const WatchList = (props) => {
    return props.items.map((item, index)=>{

        return<li className="list-items" key={index}>
            <span >{item.title}</span>
            <button className="btn btn-danger" onClick={ () => props.deleteValue(index)}>Delete</button>
        </li>
       
        
    })
}

export default WatchList
