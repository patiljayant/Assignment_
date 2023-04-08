import React from 'react'
import './Cell.css'
interface props {
    value : any
}

const Cell : React.FC<props> = ({value}) => {
  return (
    <div className='cell flex'>{value}</div>
  )
}

export default Cell



