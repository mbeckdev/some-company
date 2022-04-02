import logo from './pglogo2-cropped-minified.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App__title">Peanut Gallery Consulting</h1>
        <p className="App-link">Growing businesses since 2022</p>
        <p>
          Check out one of our{' '}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">demo sites</a>
        </p>
      </header>
    </div>
  );
}

export default App;
