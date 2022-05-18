import logo from './logo.svg';
import Sample from './sample'
import Tooltip from './components/Tooltip'
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
const Content= () => {
  return (
    <div>
      <h1>Contentコンポーネント</h1>
    </div>
  );
};

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 300,
  };
  const style2 = {
    witdh: "500px",
    margin: "0 auto",
  };
  return (
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
      <div>
        <h1>ReactではじめてのTooltip実装</h1>
        <div>
          <Tooltip
            content={<Content />}
            location="right"
          >
            <button>ToolTip</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
