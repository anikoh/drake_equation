var expect = require('chai').expect
import passwordMeter from '../app/lib/passwordMeter'

//arrow functions es6
describe('passwordMeter', () =>{
  it('should return weak by default', () =>{
    expect(passwordMeter('')).to.be.equal('worst')
  })
})
