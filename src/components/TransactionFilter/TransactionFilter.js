import React from 'react';
import './TransactionFilter.css'

const TransactionFilter = ({ filter, setFilter }) => {
 return (
    <div>
      <h2>Filter Transactions</h2>
      <input
        type="text"
        placeholder="Filter by description"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
 );
};

export default TransactionFilter;
