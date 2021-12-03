import React, { useState } from 'react';
import expenses from './mockData';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expensesState, setExpensesState] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setExpensesState([
      {
        ...expense,
        date: new Date(expense.date)
      },
      ...expensesState,
    ])
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expensesState}
      />
    </div>
  );
}

export default App;
