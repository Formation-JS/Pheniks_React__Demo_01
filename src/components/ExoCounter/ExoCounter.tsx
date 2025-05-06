import { useCallback, useState } from 'react';
import style from './ExoCounter.module.css';

type ExoCounterProps = { 
  step? : number;
}

export default function ExoCounter({ step = 1 } : ExoCounterProps) {
  
  const [count, setCount] = useState<number>(0);

  //! ↓ Les fonctions "handle" simple (sans opti)
  /*
  const handleIncr = () => {
    setCount(count => count + step);
  };

  const handleReset = () => {
    setCount(0);
  };
  */
 
 //! ↓ Les fonctions "handle" mémorisé
 //? Avec un dépendence à "step" (Regénérer si la valeur de "step" change)
 const handleIncr = useCallback(() => {
    setCount(count => count + step);
  }, [step]);

  //? Sans dépendences (Généré qu'une seul fois)
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);


  return (
    <div className={style.card}>
      <p className={style.count}>{count}</p>
      <button onClick={handleIncr}>+ {step}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
