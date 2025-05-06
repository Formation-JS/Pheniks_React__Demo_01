import ExoCounter from './components/ExoCounter/ExoCounter';
import PeopleList from './components/PeopleList/PeopleList';
import SimpleCounter from './components/SimpleCounter/SimpleCounter';
import Welcome from './components/Welcome/Welcome';
import peopleService from './services/people.service';

function App() {

  //? Demo 01 - Intro
  // return (
  //   <div>
  //     <h1>Hello Phéniks</h1>
  //     <Welcome firstname='Della' age={42} />
  //     <hr/>
  //     <Welcome firstname='Riri' age={13} />
  //   </div>
  // )

  //? Demo 02 - Collection
  // const people = peopleService.getAll();
  //
  // return (
  //   <div>
  //     <h1>Les collections</h1>
  //     <PeopleList people={people} />
  //   </div>
  // )

  //? Demo 03 - State
  return (
    <div>
      <h1>Les variables d'état</h1>
      {/* <SimpleCounter /> */}
      <ExoCounter />
      <hr/>
      <ExoCounter step={3} />
    </div>
  );
}

export default App;
