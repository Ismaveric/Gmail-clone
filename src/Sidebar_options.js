import React from 'react'
import './Sidebar_options.css'

function Sidebar_options({Icon, title, number, selected}) {
  return (
    <div className={`sidebar-options ${selected && 'sidebar-options--selected'}`}>
        <Icon/>
        <strong>{title}</strong>
        <p>{number}</p>
    </div>
  )
}

export default Sidebar_options