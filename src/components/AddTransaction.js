import React, {useRef} from 'react'

const AddTransaction = () => {
    const textRef = useRef(null); 
    const amountRef = useRef(0); 

    const submitHandler = e => {
        e.preventDefault();

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
