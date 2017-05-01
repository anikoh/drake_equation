import React from 'react'

export default class EquationVal extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);

  }



  handleChange(event){
    this.setState({password: event.target.value})

  }

  render(){
  //  const strength = passwordMeter(this.state.password)
  return (
    <div>
      <input type="number"
      onChange={this.props.drakeTest}
      value=  {this.props.valText} />

    </div>)
  }
}


module.exports = EquationVal
