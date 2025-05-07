import { useEffect, useState } from 'react';

export default function Horloge() {

  const [now, setNow] = useState(new Date());

  useEffect(() => {

    console.log('Effect');
    const timerId = setTimeout(() => {
      setNow(new Date());
    }, 1_000);

    return () => {
      console.log('Cleanup');
      clearTimeout(timerId);
    };

  });

  const hours = now.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds();

  console.log('Rendu')
  return (
      <p>{hours} : {minutes} : {seconds < 10 && '0'}{seconds}</p>
  );
}