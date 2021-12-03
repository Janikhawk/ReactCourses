import React, {useState} from 'react';
import expenses from './mockData';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [localState, setAppState] = useState({
    expenses,
    addedExpense: null,
    selectedYear: Object.keys(expenses)[0]
  });


  const addExpenseHandler = (expense) => {
    const mapCopy = localState.expenses;
    mapCopy[localState.selectedYear] = 
      [expense, ...mapCopy[localState.selectedYear]];

    setAppState((prevState) => {
      return {
        ...prevState,
        expenses: mapCopy,
        addedExpense: expense,
      }
    })
  }

  const selectChangeHandler = (event) => {
    setAppState({
      ...localState,
      selectedYear: event,
    })
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
