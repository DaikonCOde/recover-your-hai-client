import React from 'react'
import { ContentRangeFilter } from './RangeFilterStyles'

const RangeFilter = ({ label, min, max, name ,value, symbole = '',id, change }) => {
  return (
    <ContentRangeFilter className="filter">
      <p className="label">{ label }</p>
      <div className="range">
        <input 
          type="range" 
          min={ min } 
          max={ max } 
          name={name}
          step="50"
          value={value}
          onChange={change} 
        />
        <span className="min" >{symbole} {min}</span>
        <span className="max" >{symbole} {max}</span>
        <span className="value" id={id} >{symbole} {value}</span>
      </div>
    </ContentRangeFilter>
  )
}

export default RangeFilter