//const React = require('react')

import React from 'react'

class Slider extends React.Component {

  constructor(props){
    super(props)
//    this.handleChange = this.handleChange.bind(this) // bind the context because otherwise the context would change for the handleChange function
    this.state = { value: this.props.startValue}
  }

  // handleChange(event){
  //   this.setState({value: event.target.value })
  // }


  render(){
    return (
      <div>
      <input type="range"
      onChange = {this.props.fn}
      value = {this.props.startValue}
      min={this.props.min}
      max={this.props.max}
      step={this.props.step}/>
      <input type="number"
      onChange = {this.handleChange}
      value = {this.props.fn}
      min={this.props.min}
      max={this.props.max}/>
      </div>
    )
  }
}

module.exports = Slider
