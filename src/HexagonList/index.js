import React from 'react'
import List from './list'
import PropTypes from 'prop-types'
import './hexagon-list.css'

export default class HexagonList extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    defaultIcon: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func
  }
  render () {
    return (
      <div className='zuk-kex-wrapper'>
        <List {...this.props} />
      </div>
    )
  }
}