// import logo from './logo.svg';
import "./App.css";
import Cars from "./components/Cars";
import CarsFn from "./components/CarsFn";
import Sunrise from "./components/Sunrise";
import SunriseFn from "./components/SunriseFn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <Cars /> */}
        {/* <CarsFn /> */}
        <Sunrise />
        <SunriseFn />
      </header>
    </div>
  );
}

export default App;
