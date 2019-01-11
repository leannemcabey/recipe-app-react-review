import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => <Category key={v4()} category={category} handleCategoryClick={this.props.handleCategoryClick}/>)}
      </div>
    )
  }
}

export default CategoryContainer
