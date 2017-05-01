console.log("react!!!!");

import React from 'react' // require, but with ES6 syntax
import ReactDom from 'react-dom'
import Slider from './components/Slider'
import PasswordInput from './components/PasswordInput'
import App from './components/App'

ReactDom.render(
//  <Slider startValue="50" min ="0" max="100" />,
  <App />,
  document.querySelector('#root')
)
