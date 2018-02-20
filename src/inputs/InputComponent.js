import React from 'react'
import PropTypes from 'prop-types'

export default class InputComponent extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    labelStyle: PropTypes.object
  }
  static defaultProps = {
    type: 'text',
    style: {},
    labelStyle: {}
  }
  // constructor(props, context) {

  // }
}