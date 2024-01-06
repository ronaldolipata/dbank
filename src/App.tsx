import { useEffect, useState } from 'react';
import './App.css';
import { backend } from './declarations/backend';

function App() {
  const [balance, setBalance] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  async function checkBalance() {
    try {
      setLoading(true);
      const data = await backend.checkBalance();
      setBalance(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    checkBalance();
  }, []);

  return (
    <div className="App">
      <h1>DBANK - A Decentralized Bank</h1>
      <span>{loading ? 'Checking balance' : balance}</span>
    </div>
  );
}

export default App;
