import logo from './logo.svg';
import './App.css';
import Form from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          MAPS TRIAL
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Map-box
        </a>
        <Form />
      </header>
    </div>
  );
}

export default App;
