import { useState } from 'react';
import ExpenseList from './ExpenseTracker/ExpenseList';
import ExpenseFilter from './ExpenseTracker/ExpenseFilter';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Mutton', amount: 1000, category: 'Food' },
    { id: 2, description: 'Chicken', amount: 500, category: 'Food' },
    { id: 3, description: 'Kebab', amount: 300, category: 'Food' },
    { id: 4, description: 'Maggi', amount: 200, category: 'Groceries' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
