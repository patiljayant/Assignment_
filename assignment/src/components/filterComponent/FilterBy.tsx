import React, { useRef } from 'react'
import './FilterBy.css'
import { FilterInterface, getAllDestinationCurrencies, getAllOriginCurrencies, getAllStatus, getAllTypes } from '../../resources/transaction'
import FilterDisplay from './FilterDisplay';

interface props{
    setFilterBy : React.Dispatch<React.SetStateAction<FilterInterface>>;
    filterBy : FilterInterface
}

const FilterBy : React.FC<props>= ({setFilterBy, filterBy}) => {
    const types : string[] = getAllTypes();
    const status : string[] = getAllStatus();
    const originCurrencies : string[] = getAllOriginCurrencies();
    const destinationCurrencies : string[] = getAllDestinationCurrencies();
    const type = useRef<string>("All");
    const sts = useRef<string>("All");
    const originCurrency = useRef<string>("All");
    const destinationCurrency = useRef<string>("All");

    const handleClick = () => {
        const filterBy = {
            type : type.current,
            status : sts.current,
            originCurrency : originCurrency.current,
            destinationCurrency : destinationCurrency.current
        }
        setFilterBy(filterBy);
    }
  return (
    <div className='filter-by'>
        <FilterDisplay 
            heading="Types"
            options={types}
            value = {type}
            filterByValue = {filterBy.type}
        />
        <FilterDisplay 
            heading="Status"
            options={status}
            value={sts}
            filterByValue = {filterBy.status}
        />
        <FilterDisplay 
            heading="Origin Currencies"
            options={originCurrencies}
            value={originCurrency}
            filterByValue = {filterBy.originCurrency}
        />
        <FilterDisplay 
            heading="Destination Currencies"
            options={destinationCurrencies}
            value={destinationCurrency}
            filterByValue = {filterBy.destinationCurrency}
        />
        <button className='filter-button' onClick={handleClick}> Filter Transactions </button>
    </div>
  )
}

export default FilterBy