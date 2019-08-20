import React, {Component} from "react";
import SeriesList from '../../components/SeriesList';

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
        <SeriesList list = {this.state.series}/>
      </div>
    )
  }
}

export default Series;
