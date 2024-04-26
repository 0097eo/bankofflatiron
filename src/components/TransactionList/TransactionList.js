import React from 'react';
import './TransactionList.css'

const TransactionList = ({ transactions }) => {
 return (
    <div>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.date.toLocaleDateString()} - {transaction.description} - {transaction.category} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default TransactionList;
