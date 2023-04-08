import React from 'react'
import Cell from '../cells/Cell'
import './Row.css'
import style, { headerRowStyle, evenRowStyle, oddRowStyle } from './RowConstants'
import Transaction from '../../../resources/transaction'

interface props {
    id : number;
    transaction : Transaction;
}

const Row : React.FC<props> = ({id, transaction}) => {
    const rowStyle:style = (id ===-1 ? headerRowStyle :  (id%2 === 0 ? evenRowStyle : oddRowStyle));
    const getDate = (value : string | number) => {
        const date = new Date(value);

        return date.toDateString();
    }
  return (
    <div className='row flex ' style={rowStyle}>
        {Object.entries(transaction).map(([keyName, value]) => {
            if(keyName === "createdAt"){
                value = getDate(value);
            }
            return <Cell value = {value} />
})}
    </div>
  )
}

export default Row