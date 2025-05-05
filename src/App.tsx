import Welcome from './components/Welcome/Welcome';

function App() {

  return (
    <div>
      <h1>Hello Phéniks</h1>
      <Welcome firstname='Della' age={42} />
      <hr/>
      <Welcome firstname='Riri' age={13} />
    </div>
  )
}

export default App
