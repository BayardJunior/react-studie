import React, {Component} from "react";
import Intro from "../Intro"
import "./App.css";

class App extends Component {

  state = {
    series:[]
  }

//imediatemente chamado após o componente ser renderizado
componentDidMount(){
  const series = ["Vikings", "Game od Trhones"];
  setTimeout(() =>{
    //this.setState({series: series});
    //se os nomes dos states forem iguais, basta colocar
    this.setState({series})
  }, 2000);
}

render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message= "Here you can find all of your most favorit series"/>
        the lengh of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
