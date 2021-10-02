import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpense() {
    const ctx = useContext(GlobalContext);
    const amount = ctx.transactions.map(transaction => transaction.amount);
    
    const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item, 0);
    const expense = amount.filter(item => item < 0).reduce((acc, item) => acc += item, 0)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${(expense * -1).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
