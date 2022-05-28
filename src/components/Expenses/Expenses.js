import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensiveItem from './ExpenseItem';
import './Expenses.css';
import ExpensesChart from './ExponsesChart';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (filter) => {
    setFilteredYear(filter);
  };

  const filteredExpenses =
    filteredYear !== ''
      ? items.filter((expense) => expense.date.getFullYear() === Number(filteredYear))
      : items;

  const expensesContent =
    filteredExpenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      filteredExpenses.map((item) => (
        <ExpensiveItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
      ))
    );

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
