import React from 'react'
import PieSlider from './PieSlider'
import EquationVal from './EquationVal'
import Slider from './Slider'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {newStars: 3, planets: 30, habitable: 3, habitableVal: 0, life: 40};
    this.newStarsChange = this.newStarsChange.bind(this);
    this.planetChange = this.planetChange.bind(this);
    this.habitableChange = this.habitableChange.bind(this);
    this.lifeChange = this.lifeChange.bind(this);
    // this.habitableValChange = this.habitableValChange.bind(this);
  }



  newStarsChange(event){
    this.setState({newStars: event.target.value })
  }

  planetChange(event){
    this.setState({planets: event.target.value })
  }

  habitableChange(event){
    this.setState({habitable: event.target.value })
  }

  lifeChange(event){
    this.setState({life: event.target.value })
  }

  // habitableValChange(){
  //   var total = (this.state.planets/100) * (this.state.life/100);
  //   this.setState({habitableVal: total})
  // }

  //this.state.habitableVal = (this.state.planets/100) * (this.state.life/100);



  render(){
    this.state.habitableVal = parseInt( this.state.newStars * (this.state.planets/100) * this.state.habitable * 300)


    return (

    <div>
      <h2>Number of new stars born each year</h2>
      <Slider startValue={this.state.newStars} min="1" max="30" fn={this.newStarsChange} />

      <h2>% of stars with planets</h2>
      <PieSlider divName="pie1" startValue= {this.state.planets} min="0" max="100" fn={this.planetChange} key="1"/>

      <h2>Average number of habitable planets per solar system</h2>
      <Slider startValue={this.state.habitable} min="0.1" max="5.0" step="0.1" fn={this.habitableChange} />

      <h2>Habitable planets in the Milky Way:</h2>

      <EquationVal startValue={this.state.habitableVal} /> <h3> billion</h3>

      <hr/>

      <h2>% chance a habitable planet develops life</h2>
      <PieSlider divName="pie2" startValue= {this.state.life} min="0" max="100" fn={this.lifeChange} key="2"/>
      <hr/>

    </div>
    )
  }
}
