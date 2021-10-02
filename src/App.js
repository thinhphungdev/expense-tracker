import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpense from './components/IncomeExpense.js';
import Transaction from './components/Transaction';

import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <Transaction />
            </div>
            <AddTransaction />
        </React.Fragment>
    )
}

export default App;
