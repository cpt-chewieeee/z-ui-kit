import React from 'react'
import HeaderStyle from './Header.css'
export default class Header extends React.PureComponent {
  render() {
    return (
      <header className='reusable-header' style={{ ...this.props.style }}>
        {this.props.children ? this.props.children : null}
      </header>
    )
  }
}