import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [newExpenseState, setExpenseState] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setExpenseState(false);
    }

    const expenseStateHandler = (expenseState) => {
        setExpenseState(expenseState);
    }

    let expenseCreateContent = (
        <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelSaveExpanse={expenseStateHandler}
    />);

    let expenseStartCreateContent = (
        <button onClick={() => expenseStateHandler(true)}>Add New Expense</button>
    );

    return <div className="new-expense">
        {newExpenseState ? expenseCreateContent : expenseStartCreateContent}
    </div>
}

export default NewExpense;