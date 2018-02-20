import React from 'react'
import InputComponent from './InputComponent'
import './FancyInput.css'
export default class FancyInput extends InputComponent {
  render () {
    return (
      <div className='fancy-input-container' style={{ ...this.props.style }}>
        <label style={{ ...this.props.labelStyle }} className='fancy-label'>{this.props.label}</label>
        <input className='fancy-input' type={this.props.type} onChange={this.props.onChange}/>
      </div>
    )
  }
}