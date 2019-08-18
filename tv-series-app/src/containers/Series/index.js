import React, {Component} from "react";

class Series extends Component{

  state = {
      series:[]
  }
  //imediatemente chamado após o componente ser renderizado
  componentDidMount(){
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => response.json())
    //.then((response)=> console.log(response))
    .then(json => this.setState({series: json}))
    }

  render(){
    return(
      <div>
        The lengh of series array - {this.state.series.length}
      </div>
    )
  }
}

export default Series;
