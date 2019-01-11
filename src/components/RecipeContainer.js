import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid'

class RecipeContainer extends React.Component {
  renderRecipes = () => {
    return this.props.recipes.map(recipe =>
      <Recipe key={v4()} {...recipe} updateRecipes={this.props.updateRecipes}/>
    )
  }

  render() {
    return (
      <div>{ this.renderRecipes() }</div>
    )
  }
}

export default RecipeContainer
