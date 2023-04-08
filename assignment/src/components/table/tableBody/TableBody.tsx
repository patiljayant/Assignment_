import React from 'react'
import Row from '../rows/Row'
import './TableBody.css'
import Transaction from '../../../resources/transaction'
import Loader from '../loader/Loader';


interface props {
    transactionData : Transaction[];
    loading : boolean
}

const TableBody : React.FC<props> = ({transactionData, loading}) => {
  return (
    <div className='table-body flex flex-column'>
        {
            loading ? <Loader />
            : (transactionData.length ? transactionData.map((transaction, idx) => <Row 
            transaction = {transaction}
            id={idx}
            /> ) : <div className='loader'>No data Found...</div>)
        }
    </div>
  )
}

export default TableBody