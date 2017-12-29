import React from 'react'
import PropTypes from 'prop-types'

export default class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object
  }
  render () {
    let style = {
      backgroundColor: '#fff',
      color: '#000'
    }
    if (this.props.style) {
      style = this.props.style
    }
    return (
      <li className='zuk-hex-item' >
        <div className='zuk-hex-container'>
          <a className='zuk-hex-a'>
            <img src={this.props.item.src ? this.props.item.src : this.props.defaultIcon} alt='' />
            <h1 style={style}>{this.props.item.title}</h1>
            <p style={style}>{this.props.item.context}</p>
          </a>
        </div>
      </li>
    )
  }
}