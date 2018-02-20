import React from 'react'
import ButtonComponent from './ButtonComponent'
import PropTypes from 'prop-types'
import './TextButton.css'
export default class TextButton extends ButtonComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
  }
  static defaultProps = {
    type: 'text'
  }
  render () {
    return (
      <button 
        type={this.props.type} 
        onClick={this.handleClick} 
        style={{ ...this.props.style }}
        className={`btn-text crisp`}>{this.props.text}
      </button>
    )
  }
}