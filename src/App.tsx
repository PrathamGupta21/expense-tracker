import { useState } from 'react';
import ExpenseList from './ExpenseTracker/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Mutton', amount: 1000, category: 'Food' },
    { id: 2, description: 'Chicken', amount: 500, category: 'Food' },
    { id: 3, description: 'Kebab', amount: 300, category: 'Food' },
    { id: 4, description: 'Roti', amount: 200, category: 'Food' },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) =>
        setExpenses(expenses.filter((expense) => expense.id !== id))
      }
    />
  );
}

export default App;
