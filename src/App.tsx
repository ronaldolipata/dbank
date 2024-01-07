import { useEffect, useState } from 'react';
import './App.css';
import { backend } from './declarations/backend';
import displayAmountInDollars from './utils/displayAmountInDollars';

function App() {
  const [balance, setBalance] = useState<string>('$0.00'); // Ensure a default value for balance
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch and display the balance
  async function checkBalance() {
    try {
      setLoading(true);
      // Fetch balance from backend
      const amount = await backend.checkBalance();
      // Convert balance to a displayable format (dollars)
      const convertedDisplayAmount = displayAmountInDollars(amount);
      // Update balance state
      setBalance(convertedDisplayAmount);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Fetch balance on component mount
  useEffect(function () {
    checkBalance();
  }, []);

  return (
    <div className="App">
      <h1>DBANK - A Decentralized Bank</h1>
      <span>{loading ? 'Updating balance' : `$${balance}`}</span>
    </div>
  );
}

export default App;
