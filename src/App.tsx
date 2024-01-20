import { useEffect, useState } from 'react';
import './App.css';
import { backend } from './declarations/backend';
import displayAmountInDollars from './utils/displayAmountInDollars';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [balance, setBalance] = useState<string>('$0.00'); // Ensure a default value for balance
  const [amount, setAmount] = useState<number>(0);
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

  // Function to handle input
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;

    // Handle empty or invalid input cases
    if (input.trim() === '') {
      return setAmount(0); // Set amount to 0 for empty input
    }

    const parsedAmount = parseFloat(input);

    // Check for non-numeric or negative input
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      return setAmount(0); // Set amount to 0 for non-numeric or negative input
    }

    // Convert parsed amount to cents
    const cents = Math.round(parsedAmount * 100);
    setAmount(cents);
  }

  // Function to handle deposit button click
  async function handleDeposit() {
    try {
      setLoading(true);
      // Deposit the amount to the backend
      await backend.deposit(amount);
      checkBalance(); // Refresh balance after deposit
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Function to handle withdrawal button click
  async function handleWithdrawal() {
    try {
      setLoading(true);
      // Withdraw the amount to the backend
      await backend.withdraw(amount);
      checkBalance(); // Refresh balance after withdrawal
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
      <form>
        <Input variant="default" handleInput={handleInput} type="number" />
        <Button
          variant="primary"
          disabled={amount <= 0 || loading ? true : false}
          onClick={handleDeposit}
        >
          Deposit
        </Button>
        <Button
          variant="secondary"
          disabled={amount <= 0 || loading ? true : false}
          onClick={handleWithdrawal}
        >
          Withdraw
        </Button>
      </form>
    </div>
  );
}

export default App;
