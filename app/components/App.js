import React from 'react'
import PasswordInput from './PasswordInput'
import PieSlider from './PieSlider'
import EquationVal from './EquationVal'

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  drakeTest(val1, val2){
    return (val1/100) * (val2/100);
  }


  render(){
    return (
      <div>
        <PieSlider divName="pie1" startValue="30" min="0" max="100" fn={this.handleChange}/>
        <hr/>
        <PieSlider divName="pie2" startValue="30" min="0" max="100"/>
        <hr/>
        <EquationVal />
      </div>
    )
  }
}
