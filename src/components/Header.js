import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
          <input type='text' onChange={this.props.handleSearch} value={this.props.search} />
        </div>
      </Fragment>
    )
  }

}

export default Header
