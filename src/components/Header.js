import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'
import { connect } from 'react-redux'
import { searchCategories } from '../actions'

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
          <input 
            type='text' 
            onChange={(e) => this.props.searchCategories(e.target.value)} 
            value={this.props.search} 
          />
        </div>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    search: state.category.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCategories: (searchTerm) => dispatch(searchCategories(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
