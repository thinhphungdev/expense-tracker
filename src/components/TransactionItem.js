import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = props => {
    const ctx = useContext(GlobalContext);
    const sign = props.amount > 0 ? '' : '-';

    return (
        <li className={props.amount > 0 ? 'plus' : 'minus'}>
            {props.text} <span>{sign}${Math.abs(props.amount)}</span><button onClick={() => ctx.deleteTransaction(props.id)} className="delete-btn">x</button>
        </li>
    )
}

export default TransactionItem;
