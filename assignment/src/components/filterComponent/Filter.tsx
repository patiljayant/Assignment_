import React, { MutableRefObject } from 'react'

interface props{
    options : string[];
    value : MutableRefObject<string>;
    filterByValue : string;
}

const Filter : React.FC<props> = ({options, value, filterByValue}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        value.current = e.target.value;
    }
  return (
    <div className='sort-by flex'>
        <label className="select" htmlFor="slct">
            <select 
                id="slct" 
                required={true}
                onChange={handleChange}
            >
                <option value="All" selected={filterByValue === "All"}>All</option>
                {options.map((option, idx) => 
                    <option 
                        value={option}
                        key={idx}
                        selected={filterByValue === option}
                    >{option}</option>
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

export default Filter