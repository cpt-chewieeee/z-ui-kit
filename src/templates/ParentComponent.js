import React from 'react'
import PropTypes from 'prop-types'

export default class ParentComponent extends React.PureComponent {
  static proptTypes = {
    style: PropTypes.object
  }
  static defaultProps = {
    style: {}
  }
  constructor(props, context) {
    super(props, context)
  }
  /** Mounting */
  componentWillMount() {
    console.log('mounting', '1')
  } // 1
  componentDidMount() {
    console.log('mounting', '2')
  } // 2
  /*************/
  /** Updating */
  componentWillReceiveProps() {
    console.log('updating', '1')
  } // 1
  /* shouldComponentUpdate () {} */
  componentWillUpdate() {
    console.log('updating', '2')
  } // 2
  componentDidUpdate() {
    console.log('updating', '3')
  } // 3
  /*************/
  /** Unmounting && error handling */
  componentWillUnmount() { }
  componentDidCatch() { }
  /*************/

  /** render */
  /* render () {} */
}