import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState({ count: 4, theme: 'blue' });

  const countNo = count.count;
  const newTheme = count.theme;

  const decrement = () => {
    setCount(prevCount => {
      return { ...prevCount, count: prevCount.count - 1 };
    });
  };
  const increment = () => {
    setCount(prevCount => {
      return { ...prevCount, count: prevCount.count + 1 };
    });
  };

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{countNo}</span>
      <span>{newTheme}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
