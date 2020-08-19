import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/expenses";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/globalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
