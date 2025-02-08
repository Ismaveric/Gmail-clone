import React from 'react'
import './Sections.css'

function Sections({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section-selected" }`}
        style={{
            borderBottom:`3px solid ${color}`,
            color: `${selected && color}`
        }}>
        <Icon/>
        <p>{title}</p>

    </div>
  )
}

export default Sections