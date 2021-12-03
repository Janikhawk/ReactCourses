import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const selectChangeHandler = (event) => {
        props.onSelectChange(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectChangeHandler}>
                    {
                        props.yearArray.map(expenseItemYear =>
                            <option value={expenseItemYear} key={expenseItemYear}>{expenseItemYear}</option>

                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;