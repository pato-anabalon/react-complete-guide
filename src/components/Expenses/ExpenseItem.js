import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpensiveItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>
          {props.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </div>
      </div>
    </Card>
  );
};

export default ExpensiveItem;
