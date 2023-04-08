import React from 'react'
import SortBy from '../sortComponent/SortBy'
import './Heading.css'
import { FilterInterface } from '../../resources/transaction';

interface props{
    setSortBy : React.Dispatch<React.SetStateAction<string>>;
    setFilterBy : React.Dispatch<React.SetStateAction<FilterInterface>>;
    sortBy : string;
}
const Heading : React.FC<props>= ({setSortBy, setFilterBy, sortBy}) => {
  return (
    <div className='heading flex justify-between align center'>
        <span>Transactions</span>
        <SortBy 
            setSortBy={setSortBy}
            sortBy = {sortBy}
        />
    </div>
  )
}

export default Heading