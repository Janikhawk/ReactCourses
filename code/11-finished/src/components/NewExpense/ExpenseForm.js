import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const changeByKey = (event, key) => {
        setUserInput((prevState) => {
            let value = event.target.value;
            return {...prevState, [key]: value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
    }

    const cancelHandler = () => {
        props.onCancelSaveExpanse(false);
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.title} onChange={(e) => changeByKey(e, 'title')}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.amount} min="0.01" step="0.01"  onChange={(e) => changeByKey(e, 'amount')}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.date}  onChange={(e) => changeByKey(e, 'date')}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;