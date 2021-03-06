import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const addNewExpensesHandler = () => {
    setIsAdding(!isAdding);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  return (
    <div className='new-expense'>
      {!isAdding && <button onClick={addNewExpensesHandler}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={addNewExpensesHandler} />
      )}
    </div>
  );
};

export default NewExpense;
