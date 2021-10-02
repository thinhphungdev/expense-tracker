import React, {useContext} from 'react';
import TransactionItem from './TransactionItem';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const ctx = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {ctx.transactions.map(item => (
                    <TransactionItem
                        id={item.id}
                        key={item.id}
                        text={item.text}
                        amount={item.amount}
                     />   
                ))}
            </ul>
        </>
    )
}

export default TransactionList
