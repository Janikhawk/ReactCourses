import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
  const [expenseItemMap, setExpenseItem] = useState(
  {
    expenseMap: props.items,
    yearArray: Object.keys(props.items),
    selectedYear:  Object.keys(props.items)[0]
  });


  const selectChangeHandler = (event) => {
    setExpenseItem({
      ...expenseItemMap,
      selectedYear: event
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter 
        yearArray={expenseItemMap.yearArray}
        onSelectChange = {selectChangeHandler}
        />
      <Card >
        {
          expenseItemMap.expenseMap[expenseItemMap.selectedYear].map(propItem => 
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
