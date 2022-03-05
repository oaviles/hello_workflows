import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo powered by OA
        </p>
        <a
          className="App-link"
          href="https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Azure Static Web Apps V1.2.3
        </a>
      </header>
    </div>
  );
}

export default App;
