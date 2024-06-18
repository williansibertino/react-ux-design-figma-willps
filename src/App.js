import logo from './logo.svg';
import './App.css';
import Button from './components/button';

const App = () => {
  return (
    <div className="App">
      <Button name='Menu' />
      <Button>
        E sou um elemento filho
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve um novo carregamento.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          aprenda react
        </a>
      </header>

      <Button name='Rodapé' />
    </div>
  );
}

export default App;
