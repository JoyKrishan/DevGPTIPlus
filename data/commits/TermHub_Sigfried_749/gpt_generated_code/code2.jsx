import React from 'react';
import useSessionStorage from './useSessionStorage';

function App() {
  const {
    getItem,
    setItem,
    removeItem,
    clear,
    storage,
  } = useSessionStorage();

  const handleSetItem = () => {
    setItem('name', 'John Doe');
    setItem('age', 30);
  };

  const handleRemoveItem = () => {
    removeItem('name');
  };

  const handleClear = () => {
    clear();
  };

  return (
    <div>
      <button onClick={handleSetItem}>Set Items</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
      <button onClick={handleClear}>Clear Storage</button>
      <pre>{JSON.stringify(storage, null, 2)}</pre>
    </div>
  );
}

export default App;