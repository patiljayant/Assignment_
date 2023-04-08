import React, { useEffect, useState } from 'react'
import './Table.css'
import TableHead from './tableHead/TableHead'
import TableBody from './tableBody/TableBody'
import { TableFooter } from './tableFooter/TableFooter'
import Transaction, { FilterInterface, getTransactions } from '../../resources/transaction'

interface props {
    sortBy : string;
    filterBy : FilterInterface;
}


const Table : React.FC<props> = ({sortBy, filterBy}) => {
    const [transactionData, setTransactionData] = useState<{total : number; data : Transaction[]}>({
        total:0,
        data: []
    });
    const [pageNumber, setPageNumber] = useState<number>(1);
    const totalPages : number = Math.ceil(transactionData.total/20);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
        localStorage.setItem("sortBy", sortBy);
        localStorage.setItem("filterBy", JSON.stringify(filterBy));
        setLoading(true);
        getTransactions({page : pageNumber, filters: filterBy, sorting : sortBy})
        .then(res => {
            setTransactionData(res)
            setLoading(false);
        })
        return () => {
            localStorage.clear()
        }
    },[pageNumber, filterBy, sortBy]);
  return (
    <div className='flex flex-column'>
        <div className='table flex flex-column'>
            <TableHead />
            <TableBody 
                transactionData = {transactionData.data}
                loading={loading}
            />
        </div>
        <TableFooter 
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages = {totalPages}
        setLoading={setLoading}
        />
    </div>
  )
}

export default Table