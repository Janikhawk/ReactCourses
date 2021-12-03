import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const yearArray = [...new Set(props.items.map(item => item.date.getFullYear().toString()).sort((a, b) => a - b))];
  const [filteredYearMap, setFilteredYearMap] = useState({
    filteredYear: yearArray[0],
    yearArray,
  });

  const filterChangeHandler = (filteredYear) => {
    setFilteredYearMap({
      ...filteredYearMap,
      filteredYear
    });
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYearMap.filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        yearArray={filteredYearMap.yearArray}
        onSelectChange={filterChangeHandler}
      />
      <Card >
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
