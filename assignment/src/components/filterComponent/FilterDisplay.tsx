import React, { MutableRefObject } from 'react'
import Filter from './Filter'

interface props{
    heading : string;
    options : string[];
    value : MutableRefObject<string>;
    filterByValue : string
}
const FilterDisplay :React.FC<props> = ({heading, options, value, filterByValue}) => {
  return (
    <div className='filter-display flex flex-column'>
        <div className='filter-head flex'>
            {heading}
        </div>
        <Filter 
            options={options}
            value = {value}
            filterByValue = {filterByValue}
        />
    </div>
  )
}

export default FilterDisplay