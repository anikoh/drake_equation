import React from 'react'

export default class EquationVal extends React.Component {

  constructor(props){
    super(props)
  //  this.handleChange = this.handleChange.bind(this);

  }



  // handleChange(event){
  //   this.setState({password: event.target.value})
  //
  // }

  render(){
  //  const strength = passwordMeter(this.state.password)
  return (
    <div>
      <input type="number"
      onChange={this.props.fn}
      value=  {this.props.startValue} />

    </div>)
  }
}


module.exports = EquationVal
