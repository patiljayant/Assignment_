import React from 'react'
import './TableFooter.css'

interface props {
    pageNumber : number;
    setPageNumber : React.Dispatch<React.SetStateAction<number>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    totalPages : number;
}

export const TableFooter : React.FC<props> = ({pageNumber, setPageNumber, totalPages, setLoading}) => {
    const getPageData = (value : number) => {
        if(pageNumber + value > 0 && pageNumber + value <= totalPages){
            setPageNumber(pageNumber + value)
        }
    }
  return (
    <div className='table-footer flex justify-between'>
        <span onClick={() => {getPageData(-1)}}>&lt; Previous</span>
        <span> Page {pageNumber} of {totalPages}</span>
        <span onClick={() => {getPageData(1)}}>Next &gt;</span>
    </div>
  )
}
