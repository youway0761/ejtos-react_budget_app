import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency, budget, spending, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The Budget cannot exceed £20000");
            return;
        }
        if(event.target.value < spending) {
            alert("You cannot reduce the buget value lower than the spending");
            return;
        }

        setNewBudget(event.target.value);
        /*budget = event.target.value;*/
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        }); 
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
