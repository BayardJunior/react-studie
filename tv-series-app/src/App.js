import React from "react";
import "./App.css";

const Intro = (props) => (
  <p className="App-intro">
    Meu primeiro componente funcional
  </p>
)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tv Series List</h1>
      </header>
      <Intro/>
    </div>
  );
}

export default App;
