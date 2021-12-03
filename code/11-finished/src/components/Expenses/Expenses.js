import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [expenseItemMap] = useState(
  {
    expenseMap: props.items,
    yearArray: Object.keys(props.items),
  });


  const selectChangeHandler = (event) => {
    props.onSelectChange(event);
  }

  return (
    <div className="expenses">
      <ExpensesFilter 
        yearArray={expenseItemMap.yearArray}
        onSelectChange = {selectChangeHandler}
        />
      <Card >
        {
          expenseItemMap.expenseMap[props.selectedYear].map(propItem => 
            <ExpenseItem
              key = {propItem.title}
              title={propItem.title}
              amount={propItem.amount}
              date={propItem.date}
            />
          )
        }
      </Card>
    </div>
  );
}

export default Expenses;
