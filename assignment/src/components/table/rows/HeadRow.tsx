import React from 'react'
import Cell from '../cells/Cell'
import './Row.css'
import { headerRowStyle } from './RowConstants'
import {TransactionKeys} from '../getColumnHeaders'
import './HeadRow.css'

interface props {
    transaction : TransactionKeys;
}

const HeadRow : React.FC<props> = ({transaction}) => {
  return (
    <div className='head-row row flex ' style={headerRowStyle} >
        {Object.entries(transaction).map(([keyName, value]) => 
            <Cell value = {value} />
        )}
    </div>
  )
}

export default HeadRow