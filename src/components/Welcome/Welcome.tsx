import style from './Welcome.module.css';

type WelcomeProps = {
  firstname: string;
  age?: number;
};

export default function Welcome({ firstname, age = 18 }: WelcomeProps) {

  return (
    <>
      <p className={style['main-text']}>Bienvenue {firstname} sur l'application React</p>
      <p className={style.age}>Vous avez <span>{age}</span> ans !</p>
    </>
  );
}