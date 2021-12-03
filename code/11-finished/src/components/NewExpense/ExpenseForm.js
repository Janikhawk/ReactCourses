import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: 0,
        enteredDate: '',
    });

    const changeByKey = (event, key) => {
        setUserInput((prevState) => {
            return {...prevState, [key]: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={(e) => changeByKey(e, 'enteredTitle')}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01"  onChange={(e) => changeByKey(e, 'enteredAmount')}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} min="2021-12-01" max="2022-12-31"  onChange={(e) => changeByKey(e, 'enteredDate')}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;