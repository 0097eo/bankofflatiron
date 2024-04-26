import React, { useState } from 'react';
import TransactionList from '../TransactionList/TransactionList';
import TransactionFilter from '../TransactionFilter/TransactionFilter';
import TransactionForm from '../TransactionForm/TransactionForm';
import { TRANSACTIONS } from '../data';
import Header from '../Header/Header';

const App = () => {
 const [transactions, setTransactions] = useState(TRANSACTIONS);
 const [filter, setFilter] = useState('');

 const addTransaction = transaction => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
 };

 const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(filter.toLowerCase())
 );

 return (
    <div>
      <Header />
      <TransactionFilter filter={filter} setFilter={setFilter} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={filteredTransactions} />
    </div>
 );
};

export default App;
