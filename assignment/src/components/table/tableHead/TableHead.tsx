import React from 'react'
import './TableHead.css'
import HeadRow from '../rows/HeadRow'
import { transaction } from '../getColumnHeaders'


interface props {
}


const TableHead : React.FC<props> = () => {
  return (
    <div className='table-head flex flex-column'>
        <HeadRow
            transaction={transaction}
        />
    </div>
  )
}

export default TableHead