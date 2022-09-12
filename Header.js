import React from 'react'

function Header(props) {

  return (
    <div style={{background: 'green'}}>
        <h1>
        {props.cname}  <br/>
        </h1>
    </div>
    
  )
}

export default Header