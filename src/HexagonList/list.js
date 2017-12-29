import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

export default class List extends React.Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    defaultIcon: PropTypes.string.isRequired,
    style: PropTypes.object
  }
  render () {
    return (
      <ul className='zuk-hex-list'>
        {
          this.props.list.map((item, key) => <Item key={key}
              item={item}
              defaultIcon={this.props.defaultIcon}
              style={this.props.style}
            />
          )
        }
      </ul>
    )
  }
}