//const React = require('react')

import React from 'react';
import * as d3 from 'd3';
window.d3 = d3;
import pie from './lib/pie';


class Slider extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this) // bind the context because otherwise the context would change for the handleChange function
    this.drawData = this.drawData.bind(this)
    this.state = { value: this.props.startValue }
  }

  handleChange(event){
    this.setState({value: event.target.value })
    this.drawData()
  }

  drawData() {
    var data = [
      { label: '', value: this.state.value },
      { label: '', value: (100-this.state.value) },
    ]

    var pie = d3.select('#pie')
      .append('svg')
      .attr('width', 450)
      .attr('height', 300)
      .chart('Pie', {
        width: 450,
        height: 300,
        radius: 100,
        donutHole: {
          radius: 0,
          color: 'white'
        },
        labelTemplate: '{label}: {value}',
        legend: {
          title: 'Popular Pets'
        }
      });

    pie.draw(data);
  }

  render(){
    return (
      <div>
        <input type="range"
        onChange = {this.handleChange}
        value = {this.state.value}
        min={this.props.min}
        max={this.props.max}/>

        <div id="pie"></div>
      </div>
    )
  }
}

module.exports = Slider
