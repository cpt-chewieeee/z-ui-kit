import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from './ButtonComponent'
import './IconButton.css'

export default class IconButton extends ButtonComponent {
  static propTypes = {
    isActivate: PropTypes.bool,
    children: PropTypes.any
  }
  static defaultProps = {
    isActivate: false
  }
  render() {
    return (
      <button
        style={{ ...this.props.style }}
        onClick={this.handleClick}
        className={'btn-icon' + ' ' + (this.props.isActivate ? 'active' : '')}>
        {this.props.children}
      </button>
    )
  }
}