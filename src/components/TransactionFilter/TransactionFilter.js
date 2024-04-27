import React from 'react';
import './TransactionFilter.css'

const TransactionFilter = ({ filter, setFilter }) => {
 return (
    <div>
      
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
