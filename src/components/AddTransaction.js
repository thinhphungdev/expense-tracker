import React, {useRef, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const textRef = useRef(null); 
    const amountRef = useRef(0); 
    const ctx = useContext(GlobalContext);

    const submitHandler = e => {
        e.preventDefault();

        const transaction = {
            id: Math.floor(Math.random() * 10000000),
            text: textRef.current.value,
            amount: +amountRef.current.value
        }

        ctx.addTransaction(transaction);
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" ref={textRef} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" ref={amountRef} placeholder="Enter amount..." />
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
