import React, {  useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import Heading from './components/heading/Heading';
import FilterBy from './components/filterComponent/FilterBy';
import { FilterInterface } from './resources/transaction';

function App() {
  if(!localStorage.getItem("sortBy"))
      localStorage.setItem("sortBy", "");
  if(!localStorage.getItem("filterBy"))
      localStorage.setItem("filterBy", JSON.stringify({
        type : "All",
        status : "All",
        originCurrency : "All",
        destinationCurrency: "All"
      }));
  const [sortBy, setSortBy] = useState<string>(localStorage.getItem("sortBy") as string);
  const [filterBy, setFilterBy] = useState<FilterInterface>(JSON.parse(localStorage.getItem("filterBy") as string) as FilterInterface);

  return (
    <div className="App flex justify-center align-center flex-column">
      <Heading 
        setSortBy={setSortBy}
        setFilterBy = {setFilterBy}
        sortBy={sortBy}
      />
      <FilterBy 
        setFilterBy={setFilterBy}
        filterBy={filterBy}
      />
      <Table 
        sortBy={sortBy}
        filterBy={filterBy}
      />
    </div>
  );
}

export default App;
