import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
        <input onChange={this.props.handleFilter} type='text' value={this.props.filterInput}/>
        </div>
      </Fragment>
    )
  }

}

export default Header
