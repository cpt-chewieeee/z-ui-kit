import React from 'react'
import PropTypes from 'prop-types'


export default class Item extends React.Component {
  render () {
    return (
      <li className='zuk-hex-item' >
        <div className='zuk-hex-container'>
          <a className='zuk-hex-a'>
            <img src={this.props.item.src ? this.props.item.src : this.props.defaultIcon} alt='' />
            <h1>{this.props.item.title}</h1>
            <p>{this.props.item.context}</p>
          </a>
        </div>
      </li>
    )
  }
}