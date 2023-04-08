import React from 'react'
import './SortBy.css'
import { sortingFields } from '../table/getColumnHeaders'
interface props {
    setSortBy : React.Dispatch<React.SetStateAction<string>>;
    sortBy : string;
}
const SortBy : React.FC<props> = ({setSortBy, sortBy}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.currentTarget.value);
    }
  return (
    <div className='sort-by flex'>
        <label className="select" htmlFor="slct">
            <select 
                id="slct" 
                required={true}
                onChange={handleChange}
            >
                <option value="" disabled={true} selected={sortBy === ""}>Sort By</option>
                {Object.entries(sortingFields).map(([keyName, value]) => 
                    <option value={keyName} selected={sortBy === keyName} key={keyName}>{value}</option>
                )}
            </select>
        <svg>
        <use xlinkHref="#select-arrow-down"></use>
            </svg></label><svg className="sprites">
            <symbol id="select-arrow-down" viewBox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
        </svg>
    </div>
  )
}

export default SortBy