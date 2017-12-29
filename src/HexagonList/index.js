import React from 'react'
import List from './list'
import PropTypes from 'prop-types'
import './hexagon-list.css'

export default class HexagonList extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    defaultIcon: PropTypes.string.isRequired,
  }
  render () {
    return (
      <div className='zuk-kex-wrapper'>
        <List list={this.props.list} defaultIcon={this.props.defaultIcon} />
      </div>
    )
  }
}