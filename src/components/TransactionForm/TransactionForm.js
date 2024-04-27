import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrancationForm.css'

const TransactionForm = ({ addTransaction }) => {
 const [description, setDescription] = useState('');
 const [category, setCategory] = useState('');
 const [amount, setAmount] = useState('');
 const [date, setDate] = useState(new Date()); 

 const handleSubmit = e => {
    e.preventDefault();
    addTransaction({ description, category, amount: parseFloat(amount), date });
    setDescription('');
    setCategory('');
    setAmount('');
    setDate(new Date()); 
 };

 return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <div className="input-container">
      <label htmlFor="datePicker">Date:</label>
      <DatePicker selected={date} onChange={date => setDate(date)} />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
 );
};

export default TransactionForm;
