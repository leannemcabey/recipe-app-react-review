import React from 'react'
import Category from './Category'
import v4 from 'uuid'
import { connect } from 'react-redux'
import { setCategories } from '../actions'

class CategoryContainer extends React.Component {
  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(r => r.json())
    .then(result => {
      this.props.setCategories(result.categories)
    })
  }

  filteredCategories = () => {
    return this.props.categories.filter(c => c.strCategory.toLowerCase().includes(this.props.search.toLowerCase()))
  }

  renderCategories = () => {
    return this.filteredCategories().map(category =>
      <Category key={v4()} {...category} />
    )
  }

  render() {
    return (
      <div>{ this.renderCategories() }</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    search: state.category.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategories: (categories) => dispatch(setCategories(categories))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
