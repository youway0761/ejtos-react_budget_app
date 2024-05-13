import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { RiAddCircleFill } from "react-icons/ri";
import { HiMinusCircle } from "react-icons/hi";

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><RiAddCircleFill size='2.5em' color='Green' onClick={event=> increaseAllocation(props.name)}></RiAddCircleFill></td>
        <td><HiMinusCircle size='2.5em' color='Red' onClick={event=> decreaseAllocation(props.name)}></HiMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
