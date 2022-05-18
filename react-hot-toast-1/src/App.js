import logo from './logo.svg';
import Sample from './sample'
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
    </div>
  );
}

export default App;
