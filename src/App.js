import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initialExpenses = [
  {
    id: 1,
    date: new Date(2019, 1, 28),
    title: 'Car Insurance 2',
    amount: 94.47,
  },
  {
    id: 2,
    date: new Date(2021, 9, 30),
    title: 'Car Insurance 3',
    amount: 24.67,
  },
  {
    id: 3,
    date: new Date(2020, 2, 12),
    title: 'Taxes',
    amount: 214.67,
  },
  {
    id: 4,
    date: new Date(2019, 4, 11),
    title: 'Donuts',
    amount: 14.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
