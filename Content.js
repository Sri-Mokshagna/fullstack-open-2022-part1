import React from 'react'

function Content(props) 
{
    
  return (
    <div>
        <h3>
        {props.name1}        {props.exercises1}<br/>
        {props.name2}         {props.exercises2}<br/>
        {props.name3}    {props.exercises3}<br/>
        </h3>
    </div>
  )
}

export default Content