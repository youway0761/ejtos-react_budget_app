import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency, budget, spending, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    let timeout;

    const handleBudgetChange = (event) => {
        var oldBudget = budget;
        console.log('1');
        if (timeout){clearTimeout(timeout);}
        console.log('2');
        setNewBudget(event.target.value);
    
        timeout = setTimeout(() => {
            console.log('3 '+event.target.value);
            if(event.target.value > 20000) {
                alert("The Budget cannot exceed £20000");
                setNewBudget(oldBudget);
                return;
            }
            if(event.target.value < spending) {
                alert("You cannot reduce the buget value lower than the spending");
                setNewBudget(oldBudget);
                return;
            }
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            }); 
    
        }, 1000);
    /*         if(event.target.value > 20000) {
            alert("The Budget cannot exceed £20000");
            return;
        }
        if(event.target.value < spending) {
            alert("You cannot reduce the buget value lower than the spending");
            return;
        }

        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        }); 
    
 */    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
