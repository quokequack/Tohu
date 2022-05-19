import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bigContainer">
        <div className="content">
        <h1>TOHU</h1>
        <h3>Olá! O que posso te recomendar hoje?</h3>
        <select className="opt">
          <option value="1">FILMES</option>
          <option value="2">SÉRIES</option>
          <option value="3">LIVROS</option>
        </select>
        </div>
      </div>
    </div>
  );
}

export default App;
