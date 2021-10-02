import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpense from './components/IncomeExpense.js';
import TransactionList from './components/TransactionList';

import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransactionList />
            </div>
            <AddTransaction />
        </GlobalProvider>
    )
}

export default App;
