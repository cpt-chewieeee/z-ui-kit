import React from 'react'
import PropTypes from 'prop-types'

export default class ButtonComponent extends React.PureComponent {
  static proptTypes = {
    style: PropTypes.object,
    handleClick: PropTypes.func.isRequired,
  }
  static defaultProps = {
    style: {}
  }
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }
  /** Mounting */
  componentWillMount() { } // 1
  componentDidMount() { } // 2
  /*************/
  /** Updating */
  componentWillReceiveProps() { } // 1
  /* shouldComponentUpdate () {} */
  componentWillUpdate() { } // 2
  componentDidUpdate() { } // 3
  /*************/
  /** Unmounting && error handling */
  componentWillUnmount() { }
  componentDidCatch() { }
  /*************/

  /** render */
  /* render () {} */

  /** misc */
  handleClick(e) {
    e.preventDefault()
    this.props.handleClick(e)
  }
  /*************/
}