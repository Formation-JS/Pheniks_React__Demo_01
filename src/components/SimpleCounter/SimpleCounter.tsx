import { useState } from 'react';

export default function SimpleCounter() {

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Hello');

  const handleClick = () => {
    console.log('Marche ?');
    setCount(c => c + 1);
    setMsg('Count')
  }

  return (
    <>
      <h2>Compteur : {count} {msg}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  )
  
}