//const React = require('react')

import React from 'react';
import * as d3 from 'd3';
window.d3 = d3;
import pie from './lib/pie';


class PieSlider extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this) // bind the context because otherwise the context would change for the handleChange function
    this.drawData = this.drawData.bind(this)
    this.state = { value: this.props.startValue }

    //setTimeout(() => this.drawData(), 300)
    // this.drawData()
  }

  componentDidMount() {
    this.drawData()
  }

  handleChange(event){
    this.setState({value: event.target.value })
    this.drawData()
  }

  drawData() {
     d3.select("#" + this.props.divName).selectAll("svg").remove();

    var data = [
      { label: this.state.value + ' %', value: this.state.value },
      { label: '', value: 100-this.state.value }
    ],

    pie = d3.select("#" + this.props.divName)
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
        // labelTemplate: '{label}: {value}',
        // legend: {
        //   title: 'Popular Pets'
        // }
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
        max={this.props.max} />
        <div id={this.props.divName}></div>
      </div>
    )
  }
}

module.exports = PieSlider
