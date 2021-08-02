import './App.css';
import CreateTodo from './components/CreateTodo';

function App() {

  return (
    <div className="App">
      <h1> CRUD MILTON APP ACADEMLO</h1>

      <header className="App-header">
        <CreateTodo/>
      </header>
    </div>
  );
}

export default App;
