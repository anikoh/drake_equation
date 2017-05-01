import React from 'react'
import PasswordInput from './PasswordInput'
import PieSlider from './PieSlider'
import EquationVal from './EquationVal'
import Slider from './Slider'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {newStars: 3, planets: 30, habitable: 30, habitableVal: 0, life: 40};
    this.planetChange = this.planetChange.bind(this);
    this.lifeChange = this.lifeChange.bind(this);
  }

  drakeTest(){
    return (this.state.planets/100) * (this.state.life/100);
  }


  newStarsChange(event){
    this.setState({newStars: event.target.value })
  }

  planetChange(event){
    this.setState({planets: event.target.value })
  }

  lifeChange(event){
    this.setState({life: event.target.value })
  }

  render(){
    return (
    <div>
      <h2>Number of new stars born each year</h2>
      <Slider startValue={this.state.newStars} min="1" max="30" step="1" fn={this.newStarChange}/>
      <h2>% of stars with planets</h2>
      <PieSlider divName="pie1" startValue= {this.state.planets} min="0" max="100" fn={this.planetChange} key="1"/>
      <h2>Average number of habitable planets per solar system</h2>
      <Slider startValue={this.state.habitable} min="0.1" max="5.0" step="0.1"/>
      <h2>Habitable planets in the Milky Way:</h2>
      <EquationVal valText={this.drakeTest}/>
      <hr/>
      <h2>% chance a habitable planet develops life</h2>
      <PieSlider divName="pie2" startValue= {this.state.life} min="0" max="100" fn={this.lifeChange} key="2"/>
      <hr/>

    </div>
    )
  }
}
