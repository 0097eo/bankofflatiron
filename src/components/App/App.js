import React, { useState } from 'react';
import TransactionList from '../TransactionList/TransactionList';
import TransactionFilter from '../TransactionFilter/TransactionFilter';
import TransactionForm from '../TransactionForm/TransactionForm';
import { TRANSACTIONS } from '../data';
import Header from '../Header/Header';

const App = () => {
   const [transactions, setTransactions] = useState(TRANSACTIONS);
   const [filter, setFilter] = useState('');
   const [sortBy, setSortBy] = useState('category'); 
  
   const addTransaction = transaction => {
      setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]); };
  
   const sortTransactions = (transactions, sortBy) => {
      return transactions.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
   };
  
   const sortedTransactions = sortTransactions(transactions, sortBy);
   const filteredTransactions = sortedTransactions.filter(transaction =>
      transaction.description.toLowerCase().includes(filter.toLowerCase())
   );
  
   return (
      <div>
        <Header />
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="category">Sort by Category</option>
          <option value="description">Sort by Description</option>
        </select>
        <TransactionFilter filter={filter} setFilter={setFilter} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={filteredTransactions} />
      </div>
   );
  };
  

export default App;
