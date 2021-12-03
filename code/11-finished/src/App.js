import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = 
  {
    2019: [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2019, 1, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2019, 7, 28),
      },
    ],
    2020: [
      {
        id: 'e4',
        title: 'PopCorn',
        amount: 12.9,
        date: new Date(2020, 2, 13),
      },
      {
        id: 'e5',
        title: 'Keycult keyboard',
        amount: 3500,
        date: new Date(2020, 5, 4),
      },
    ],
    2021: [
      {
        id: 'e1',
        title: 'Book',
        amount: 94.12,
        date: new Date(2021, 3, 23),
      },
      { id: 'e2', title: 'Dish washer', amount: 2.49, date: new Date(2021, 4, 12) },
      {
        id: 'e3',
        title: 'Monitor',
        amount: 199.99,
        date: new Date(2021, 5, 28),
      },
      {
        id: 'e4',
        title: 'Smartphone',
        amount: 899.99,
        date: new Date(2021, 6, 12),
      },
      {
        id: 'e5',
        title: 'Headphones',
        amount: 289,
        date: new Date(2021, 8, 19),
      },
    ]
  };

  const [localState, setAppState] = useState({
    expenses,
    addedExpense: null,
    selectedYear: Object.keys(expenses)[0]
  });


  const addExpenseHandler = (expense) => {
    setAppState({
      ...localState,
      addedExpense: expense,
    })
  }

  const selectChangeHandler = (event) => {
    console.log(event)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        items={localState?.expenses}
        selectedYear={localState.selectedYear}
        onSelectChange={selectChangeHandler}
        />
    </div>
  );
}

export default App;
