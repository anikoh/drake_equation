import React from 'react'


export default class TweetBox extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      content: ''
    }
  }

  handleChange(event){
    this.setState({content: event.target.value })
  }




  render(){
    //destructuring / pattern matching
    // same as var content = this.state.contentS
    var {content} = this.state
    var maxLength = this.props.maxLength
    // var spanStyle = function(){
    //   if (content.length === 0 || content.length > 140){
    //     return {color: 'red'}
    //   }
    //   else {
    //     return {color: 'black'}
    //   }
    // }

    var isDisabled = content.length === 0 || content.length > maxLength
    //ternary operator
    var spanStyle = isDisabled ?
     {color: 'red'} : {color: 'black'}




    return (<div>
      <textarea onChange={this.handleChange}></textarea>
      <button disabled={isDisabled}>post</button>
      <span style= { spanStyle }>{maxLength - content.length}</span>
     </div>)
  }
}
